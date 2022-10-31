import styles from './Header.module.css';
import React from 'react';

export default function Header() {
  return (
    <div className="shadow-md bg-white h-16 flex justify-between">
      {/* <div className=""> */}
      <div className="text-xl self-center pl-8">Spend Calculator</div>
      <div className="self-center pr-8">Spend Calculator</div>
      {/* </div> */}
    </div>
  );
}
