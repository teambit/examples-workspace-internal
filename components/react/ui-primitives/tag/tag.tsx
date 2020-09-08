import React from 'react';
import classnames from 'classnames';
import styles from './tag.module.scss';

type TagProps = {
  onPick?: (Tag: string) => any;
  children: string;
} & React.InputHTMLAttributes<HTMLDivElement>;

export function Tag({ onPick, onClick, className, ...rest }: TagProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onPick && onPick(rest.children);
    return onClick && onClick(e);
  };

  return <div {...rest} onClick={handleClick} className={classnames(className, styles.label)} />;
}
