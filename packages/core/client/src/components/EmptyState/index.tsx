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

import React from 'react';
import { Empty, Button } from 'antd';
import { useToken } from '../../../style';
import { css } from '@emotion/css';

export interface EmptyStateProps {
  /** 标题 */
  title?: React.ReactNode;
  /** 描述文字 */
  description?: React.ReactNode;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 操作按钮 */
  action?: React.ReactNode;
  /** 图片URL */
  image?: string;
  /** 图片样式 */
  imageStyle?: React.CSSProperties;
  /** 类型 */
  type?: 'default' | 'no-data' | 'no-permission' | 'not-found' | 'network-error';
  /** 大小 */
  size?: 'small' | 'middle' | 'large';
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: React.CSSProperties;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  image,
  imageStyle,
  type = 'default',
  size = 'middle',
  className,
  style,
}) => {
  const { token } = useToken();

  // 预设类型的配置
  const presetConfig = {
    'no-data': {
      title: '暂无数据',
      description: '这里还没有任何内容，快去添加吧',
    },
    'no-permission': {
      title: '暂无权限',
      description: '你没有权限访问此页面，请联系管理员',
    },
    'not-found': {
      title: '页面不存在',
      description: '你访问的页面不存在或已被删除',
    },
    'network-error': {
      title: '网络错误',
      description: '网络连接失败，请检查网络后重试',
    },
    default: {
      title: '暂无内容',
      description: '这里还没有任何内容',
    },
  };

  const config = presetConfig[type];
  const finalTitle = title ?? config.title;
  const finalDescription = description ?? config.description;

  const emptyClass = css`
    padding: ${size === 'large' ? '80px 0' : size === 'small' ? '20px 0' : '40px 0'};
    text-align: center;

    .ant-empty-image {
      margin-bottom: 16px;
      height: auto;

      svg {
        max-width: ${size === 'large' ? '240px' : size === 'small' ? '80px' : '160px'};
        height: auto;
      }
    }

    .ant-empty-description {
      color: ${token.colorTextSecondary};
      margin-bottom: 24px;
      font-size: ${size === 'large' ? '16px' : size === 'small' ? '12px' : '14px'};
      line-height: 1.5;
    }

    .ant-empty-footer {
      margin-top: 16px;
    }
  `;

  return (
    <Empty
      className={`${emptyClass} ${className || ''}`}
      style={style}
      image={image}
      imageStyle={imageStyle}
      description={finalDescription}
    >
      {finalTitle && <div className="font-semibold text-lg mb-2">{finalTitle}</div>}
      {action && <div className="ant-empty-footer">{action}</div>}
    </Empty>
  );
};

// 便捷创建带操作按钮的空状态
export const createActionEmptyState = (
  type: EmptyStateProps['type'],
  buttonText: string,
  onButtonClick: () => void,
  props?: Omit<EmptyStateProps, 'type' | 'action'>,
) => {
  return (
    <EmptyState
      type={type}
      action={
        <Button type="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      }
      {...props}
    />
  );
};

export default EmptyState;
