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
import { Dropdown, MenuProps, Button, Tooltip } from 'antd';
import { SunOutlined, MoonOutlined, DesktopOutlined, CheckOutlined } from '@ant-design/icons';
import { useGlobalTheme, ThemeMode } from './index';

interface ThemeSwitcherProps {
  /** 按钮类型 */
  type?: 'text' | 'icon' | 'button';
  /** 按钮大小 */
  size?: 'small' | 'middle' | 'large';
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ type = 'icon', size = 'middle' }) => {
  const { isDarkTheme, themeMode, setThemeMode, toggleTheme } = useGlobalTheme();

  const menuItems: MenuProps['items'] = [
    {
      key: 'light',
      label: '亮色模式',
      icon: themeMode === 'light' ? <CheckOutlined /> : null,
      onClick: () => setThemeMode('light'),
      prefixCls: 'nb-theme-menu-item',
    },
    {
      key: 'dark',
      label: '暗色模式',
      icon: themeMode === 'dark' ? <CheckOutlined /> : null,
      onClick: () => setThemeMode('dark'),
      prefixCls: 'nb-theme-menu-item',
    },
    {
      key: 'system',
      label: '跟随系统',
      icon: themeMode === 'system' ? <CheckOutlined /> : null,
      onClick: () => setThemeMode('system'),
      prefixCls: 'nb-theme-menu-item',
    },
  ];

  // 获取当前主题的图标
  const getCurrentIcon = () => {
    if (themeMode === 'system') {
      return <DesktopOutlined />;
    }
    return isDarkTheme ? <MoonOutlined /> : <SunOutlined />;
  };

  // 获取当前主题的提示文字
  const getTooltipTitle = () => {
    switch (themeMode) {
      case 'light':
        return '亮色模式';
      case 'dark':
        return '暗色模式';
      case 'system':
        return '跟随系统';
      default:
        return '切换主题';
    }
  };

  if (type === 'icon') {
    return (
      <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
        <Tooltip title={getTooltipTitle()}>
          <Button
            type="text"
            icon={getCurrentIcon()}
            size={size}
            onClick={(e) => e.stopPropagation()}
            style={{
              color: isDarkTheme ? '#C9CDD4' : '#4E5969',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Tooltip>
      </Dropdown>
    );
  }

  if (type === 'text') {
    return (
      <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
        <Button type="text" icon={getCurrentIcon()} size={size} onClick={(e) => e.stopPropagation()}>
          {getTooltipTitle()}
        </Button>
      </Dropdown>
    );
  }

  // button类型
  return (
    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
      <Button type="default" icon={getCurrentIcon()} size={size} onClick={(e) => e.stopPropagation()}>
        {getTooltipTitle()}
      </Button>
    </Dropdown>
  );
};

export default ThemeSwitcher;
