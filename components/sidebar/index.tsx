import React from 'react';
import RouteMenu from '../RouteMenu';

export default function SideBar() {
  return (
    <div className="flex shadow-md bg-white w-40 h-full flex-col justify-between">
      <RouteMenu />
    </div>
  );
}
