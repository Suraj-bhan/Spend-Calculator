import EditorPanel from '../components/editorpanel/index';
import Header from '../components/header/index';
import SideBar from '../components/sidebar/index';
import React from 'react';

export default function Editor() {
  return (
    <>
      <div className="h-screen bg-gray-100">
        <main className="h-full">
          <Header />
          <div className="h-auto flex">
            <SideBar />
            <EditorPanel />
          </div>
        </main>
      </div>
    </>
  );
}
