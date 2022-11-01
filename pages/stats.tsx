import EditorPanel from '../components/editorpanel/index';
import Header from '../components/header/index';
import SideBar from '../components/sidebar/index';
import React from 'react';

export default function Stats() {
  return (
    <>
      <div className="h-screen bg-gray-100">
        <main className="h-full">
          <Header />
          <div className="h-auto flex">
            <div className="hidden md:flex">
              <SideBar />
            </div>
            <EditorPanel />
          </div>
        </main>
      </div>
    </>
  );
}
