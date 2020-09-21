import React, { useState } from 'react';
import styles from './app-bar.module.scss';

export type AppBarProps = {
  items: { label: string; action: () => void }[],
  children?: React.ReactNode,
  [x:string]: any
};

export const AppBar = ({ items, children, ...rest } : AppBarProps) => {
  const [selectedItem, setSelectedItem] = useState('--none--');

  const handleItemClick = (event, callback) => {
    setSelectedItem(event.target.innerText);
    if (callback) callback();
  };

  return (
    <div className={styles.appBar} {...rest}>
      <ul>
        {items.map(item => (
          <li
            key={Math.random()}
            className={selectedItem === item.label ? styles.selected : null}
            onClick={e => handleItemClick(e, item.action)}
          >
            {item.label}
          </li>
        ))}
        {children && <div className={styles.logo}>{children}</div>}
      </ul>
    </div>
  );
};
