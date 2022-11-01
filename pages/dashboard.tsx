import Header from '../components/header/index';
import SideBar from '../components/sidebar/index';
import React from 'react';
import DashboardContainer from '../components/DashboardContainer';

export default function Dashboard() {
  return (
    <>
      <div className="h-screen bg-gray-100">
        <main className="h-full">
          <Header />
          <div className="h-auto flex">
            <div className="hidden md:flex">
              <SideBar />
            </div>
            {/* <EditorPanel /> */}
            <DashboardContainer />
          </div>
        </main>
      </div>
    </>
  );
}
