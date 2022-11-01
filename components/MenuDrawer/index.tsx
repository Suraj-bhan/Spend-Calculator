import React from 'react';
import { Drawer } from 'antd';
import SideBar from '../sidebar';
import RouteMenu from '../RouteMenu';
interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC = ({ open, onClose }: MenuDrawerProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Drawer
        title="Spend Calculator"
        placement={'left'}
        onClose={handleClose}
        open={open}
        width={200}
      >
        {/* <SideBar /> */}
        <RouteMenu />
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
