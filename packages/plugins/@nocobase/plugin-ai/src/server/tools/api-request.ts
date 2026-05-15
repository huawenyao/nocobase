/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

/**
 * This file is part of the 钛动科技 project.
 * Copyright (c) 2020-2024 钛动科技
 * Authors: 钛动科技 Team.
 *
 * This project is dual-licensed under AGPL-3.0 and 钛动科技 Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { z } from 'zod';
import { Context } from '@nocobase/actions';
import { ToolsOptions } from '@nocobase/ai';
import { truncateLongStrings } from './utils';

/**
 * 敏感API拦截列表，禁止调用高危操作
 * 格式: resource:action
 */
const SENSITIVE_APIS = [
  // 用户相关高危操作
  'users:destroy',
  'users:update',
  'users:updatePassword',
  'roles:destroy',
  'roles:update',

  // 系统配置相关
  'systemSettings:update',
  'systemSettings:destroy',

  // 数据库结构相关
  'collections:destroy',
  'collections:update',
  'fields:destroy',
  'fields:update',
  'uiSchemas:destroy',
  'uiSchemas:update',

  // 权限相关
  'acl:update',
  'acl:destroy',

  // 插件管理
  'plugins:destroy',
  'plugins:update',
  'plugins:install',
  'plugins:uninstall',
];

/**
 * API请求参数Schema
 */
const apiRequestSchema = z
  .object({
    url: z
      .string()
      .describe('API请求地址，格式为"资源名:操作名"，例如"aiEmployees:create"、"posts:list"')
      .regex(/^[\w-]+:[\w-]+$/, 'url格式不正确，应为"资源名:操作名"格式'),

    method: z.enum(['get', 'post', 'put', 'delete', 'patch']).describe('HTTP请求方法，默认为get').default('get'),

    data: z.record(z.any()).describe('请求体数据，用于post/put/patch方法').optional(),

    params: z.record(z.any()).describe('查询参数，用于get/delete方法').optional(),
  })
  .describe('通用NocoBase API调用工具，可调用系统所有公开API接口');

/**
 * 工具调用实现
 */
const invoke = async (ctx: Context, args: z.infer<typeof apiRequestSchema>) => {
  try {
    // 1. 解析URL
    const [resourceName, actionName] = args.url.split(':');

    // 2. 检查敏感API
    const apiKey = `${resourceName}:${actionName}`;
    if (SENSITIVE_APIS.includes(apiKey)) {
      return {
        status: 'error' as const,
        content: JSON.stringify({
          error: 'Permission denied',
          message: `API ${apiKey} is a sensitive operation and cannot be called by AI employees`,
        }),
      };
    }

    // 3. 检查资源是否存在
    const resource = ctx.app.resourcesManager.getResource(resourceName);
    if (!resource) {
      return {
        status: 'error' as const,
        content: JSON.stringify({
          error: 'Resource not found',
          message: `Resource ${resourceName} does not exist`,
        }),
      };
    }

    // 4. 检查操作是否存在
    const action = resource.getAction(actionName);
    if (!action) {
      return {
        status: 'error' as const,
        content: JSON.stringify({
          error: 'Action not found',
          message: `Action ${actionName} does not exist for resource ${resourceName}`,
        }),
      };
    }

    // 5. 构建请求参数
    const actionParams = {
      ...args.params,
      values: args.data,
    };

    // 6. 构建执行上下文，复用当前用户的权限信息
    const actionContext = {
      ...ctx,
      // 清除原有action，避免冲突
      action: undefined,
    };

    // 7. 获取并克隆action对象，避免修改全局实例
    const action = ctx.app.resourceManager.getAction(resourceName, actionName).clone();
    // 设置上下文
    action.setContext(actionContext);
    // 合并参数
    action.mergeParams({
      ...args.params,
      values: args.data,
    });

    // 8. 执行API调用
    const result = await action.execute(actionContext);

    // 7. 处理返回结果
    const truncatedResult = truncateLongStrings(result);

    return {
      status: 'success' as const,
      content: JSON.stringify(truncatedResult),
    };
  } catch (error: any) {
    // 处理异常
    const errorResult = {
      error: error.name || 'Unknown error',
      message: error.message || 'An unknown error occurred',
      code: error.code || 'INTERNAL_ERROR',
    };

    return {
      status: 'error' as const,
      content: JSON.stringify(errorResult),
    };
  }
};

/**
 * API请求工具定义
 */
export const apiRequestTool: ToolsOptions = {
  scope: 'GENERAL',
  defaultPermission: 'ASK',
  execution: 'backend',
  introduction: {
    title: '通用API调用工具',
    about: '可以调用NocoBase系统所有公开的API接口，支持CRUD等各类操作',
  },
  definition: {
    name: 'apiRequest',
    description: '调用NocoBase系统API接口，url格式为"资源名:操作名"，例如"aiEmployees:create"',
    schema: apiRequestSchema,
  },
  invoke: async (ctx: Context, args: any, id: string) => {
    // 验证参数
    const validatedArgs = apiRequestSchema.parse(args);
    return invoke(ctx, validatedArgs);
  },
};
