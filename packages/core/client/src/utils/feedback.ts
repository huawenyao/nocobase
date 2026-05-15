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

import { message, notification, Modal, App } from 'antd';
import type { MessageArgsProps, NotificationArgsProps, ModalFuncProps } from 'antd';

// 全局配置message
message.config({
  duration: 3, // 自动关闭时间3秒
  maxCount: 5, // 最大显示数量
  top: 64 + 16, // 距离顶部的高度，避开头部导航
});

// 全局配置notification
notification.config({
  duration: 4.5, // 自动关闭时间4.5秒
  placement: 'topRight', // 右上角显示
  top: 64 + 16, // 距离顶部的高度，避开头部导航
  maxCount: 3, // 最大显示数量
});

/**
 * 消息提示工具类
 * 统一全局反馈样式，符合设计规范
 */
export const Feedback = {
  /**
   * 成功提示
   */
  success(content: React.ReactNode, config?: Omit<MessageArgsProps, 'content' | 'type'>) {
    return message.success(content, config?.duration, config?.onClose);
  },

  /**
   * 错误提示
   */
  error(content: React.ReactNode, config?: Omit<MessageArgsProps, 'content' | 'type'>) {
    return message.error(content, config?.duration, config?.onClose);
  },

  /**
   * 警告提示
   */
  warning(content: React.ReactNode, config?: Omit<MessageArgsProps, 'content' | 'type'>) {
    return message.warning(content, config?.duration, config?.onClose);
  },

  /**
   * 信息提示
   */
  info(content: React.ReactNode, config?: Omit<MessageArgsProps, 'content' | 'type'>) {
    return message.info(content, config?.duration, config?.onClose);
  },

  /**
   * 加载提示
   */
  loading(content: React.ReactNode, config?: Omit<MessageArgsProps, 'content' | 'type'>) {
    return message.loading(content, config?.duration, config?.onClose);
  },

  /**
   * 通知提醒
   */
  notification: {
    /**
     * 成功通知
     */
    success(config: Omit<NotificationArgsProps, 'type'>) {
      return notification.success(config);
    },

    /**
     * 错误通知
     */
    error(config: Omit<NotificationArgsProps, 'type'>) {
      return notification.error(config);
    },

    /**
     * 警告通知
     */
    warning(config: Omit<NotificationArgsProps, 'type'>) {
      return notification.warning(config);
    },

    /**
     * 信息通知
     */
    info(config: Omit<NotificationArgsProps, 'type'>) {
      return notification.info(config);
    },

    /**
     * 打开通知
     */
    open(config: NotificationArgsProps) {
      return notification.open(config);
    },

    /**
     * 关闭通知
     */
    close(key: string) {
      return notification.close(key);
    },

    /**
     * 销毁所有通知
     */
    destroy() {
      return notification.destroy();
    },
  },

  /**
   * 对话框
   */
  modal: {
    /**
     * 信息对话框
     */
    info(config: Omit<ModalFuncProps, 'type'>) {
      return Modal.info(config);
    },

    /**
     * 成功对话框
     */
    success(config: Omit<ModalFuncProps, 'type'>) {
      return Modal.success(config);
    },

    /**
     * 错误对话框
     */
    error(config: Omit<ModalFuncProps, 'type'>) {
      return Modal.error(config);
    },

    /**
     * 警告对话框
     */
    warning(config: Omit<ModalFuncProps, 'type'>) {
      return Modal.warning(config);
    },

    /**
     * 确认对话框
     */
    confirm(config: Omit<ModalFuncProps, 'type'>) {
      return Modal.confirm(config);
    },
  },

  /**
   * 使用App context的反馈（推荐在组件内使用）
   * 需要在组件外包裹App组件
   */
  useApp() {
    const { message, notification, modal } = App.useApp();
    return {
      message,
      notification,
      modal,
    };
  },
};

export default Feedback;
