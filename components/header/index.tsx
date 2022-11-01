import styles from './Header.module.css';
import React, { useState } from 'react';
import MenuDrawer from '../MenuDrawer';
import { MenuOutlined } from '@ant-design/icons';

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <div className="shadow-md bg-white h-16 flex justify-between">
      <div className="self-center pl-8">
        <MenuOutlined onClick={handleOpenDrawer} />
      </div>
      <MenuDrawer open={openDrawer} onClose={handleCloseDrawer} />
      <div className="text-xl self-center pl-8">Spend Calculator</div>
      <div className="self-center pr-8">Spend Calculator</div>
      {/* </div> */}
    </div>
  );
}
