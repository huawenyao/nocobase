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

import { ThemeConfig } from './type';
import { theme } from 'antd';

const { darkAlgorithm } = theme;

const darkTheme: ThemeConfig = {
  name: 'dark',
  algorithm: darkAlgorithm,
  token: {
    // ========== 核心品牌色 ==========
    colorPrimary: '#4080FF', // 暗色模式下主色稍微提亮
    colorSuccess: '#00B42A',
    colorWarning: '#FF9A2E',
    colorError: '#FF6B6B',
    colorInfo: '#86909C',

    // ========== 中性色系统 ==========
    colorText: '#E5E6EB', // 主文本色
    colorTextSecondary: '#C9CDD4', // 次要文本色
    colorTextTertiary: '#86909C', // 辅助文本色
    colorTextQuaternary: '#4E5969', // 禁用文本色
    colorBgContainer: '#1D2129', // 容器背景色
    colorBgLayout: '#0F1218', // 页面布局背景色
    colorBgElevated: '#272E3B', // 悬浮容器背景色（弹窗、卡片）
    colorBorder: '#4E5969', // 边框色
    colorBorderSecondary: '#272E3B', // 次要边框色

    // ========== 字体系统 ==========
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontFamilyCode: "JetBrains Mono, Consolas, 'Courier New', monospace",
    fontSize: 14,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    lineHeight: 1.57,
    lineHeightHeading1: 1.25,
    lineHeightHeading2: 1.33,
    lineHeightHeading3: 1.4,
    lineHeightHeading4: 1.5,
    fontWeightStrong: 600,

    // ========== 圆角系统 ==========
    borderRadius: 6,
    borderRadiusSM: 4,
    borderRadiusLG: 8,
    borderRadiusXL: 12,

    // ========== 间距系统 ==========
    sizeUnit: 8,
    sizeXXS: 4,
    sizeXS: 8,
    sizeS: 16,
    sizeM: 24,
    sizeL: 32,
    sizeXL: 48,

    // ========== 动画系统 ==========
    motionDurationSlow: 0.3,
    motionDurationMid: 0.2,
    motionDurationFast: 0.1,
    motionUnit: 0.03,

    // ========== 布局配置 ==========
    siderWidth: 240, // 侧边栏宽度
    paddingPageHorizontal: 24, // 页面左右内边距
    paddingPageVertical: 24, // 页面上下内边距
    marginBlock: 24, // 区块之间的间隔
    borderRadiusBlock: 8, // 区块的圆角

    // ========== 顶部导航栏扩展配置 ==========
    colorPrimaryHeader: '#0F1218',
    colorBgHeader: '#0F1218',
    colorBgHeaderMenuHover: '#272E3B',
    colorBgHeaderMenuActive: 'rgba(64, 128, 255, 0.2)',
    colorTextHeaderMenu: '#C9CDD4',
    colorTextHeaderMenuHover: '#FFFFFF',
    colorTextHeaderMenuActive: '#FFFFFF',

    // ========== UI 配置组件扩展配置 ==========
    colorSettings: '#4080FF',
    colorBgSettingsHover: 'rgba(64, 128, 255, 0.1)',
    colorTemplateBgSettingsHover: 'rgba(255, 154, 46, 0.1)',
    colorBorderSettingsHover: 'rgba(64, 128, 255, 0.3)',

    // ========== 侧边菜单暗色配置 ==========
    colorBgSider: '#1D2129',
    colorTextSiderMenu: '#C9CDD4',
    colorBgSiderMenuHover: '#272E3B',
    colorTextSiderMenuHover: '#4080FF',
    colorBgSiderMenuActive: 'rgba(64, 128, 255, 0.1)',
    colorTextSiderMenuActive: '#4080FF',
  },
  // ========== 组件级定制 ==========
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 36,
      primaryShadow: '0 2px 8px rgba(64, 128, 255, 0.3)',
      dangerShadow: '0 2px 8px rgba(255, 107, 107, 0.3)',
    },
    Card: {
      borderRadiusLG: 8,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      boxShadowHover: '0 4px 16px rgba(0, 0, 0, 0.3)',
      paddingLG: 24,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 36,
      activeShadow: '0 0 0 2px rgba(64, 128, 255, 0.2)',
    },
    Select: {
      borderRadius: 6,
      controlHeight: 36,
      optionSelectedBg: 'rgba(64, 128, 255, 0.1)',
    },
    Table: {
      borderRadiusLG: 8,
      headerBg: '#272E3B',
      rowHoverBg: 'rgba(64, 128, 255, 0.05)',
      rowSelectedBg: 'rgba(64, 128, 255, 0.1)',
    },
    Modal: {
      borderRadiusLG: 12,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    },
    Menu: {
      itemBorderRadius: 6,
      itemHoverBg: '#272E3B',
      itemSelectedBg: 'rgba(64, 128, 255, 0.1)',
    },
    Tabs: {
      borderRadius: 6,
      itemHoverColor: '#4080FF',
      itemSelectedColor: '#4080FF',
      inkBarColor: '#4080FF',
    },
  },
};

export default darkTheme;
