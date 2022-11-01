import React, { useEffect, useState } from 'react';
import {
  PieChartOutlined,
  HomeOutlined,
  EditOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/router';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '0', <HomeOutlined />),
  getItem('Editor', '1', <EditOutlined />),
  getItem('Dashboard', '2', <DatabaseOutlined />),
  getItem('Status', '3', <PieChartOutlined />),
];

const routeMapping = ['/', '/editor', '/dashboard', '/stats'];

const RouteMenu: React.FC = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState('0');
  const handleRouteChange = (e) => {
    router.push(routeMapping[e.key]);
  };

  useEffect(() => {
    setSelectedKey(routeMapping.indexOf(router.pathname).toString() as string);
  }, [router.pathname]);

  return (
    <div>
      <Menu
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
        items={items}
        onClick={handleRouteChange}
      />
    </div>
  );
};

export default RouteMenu;
