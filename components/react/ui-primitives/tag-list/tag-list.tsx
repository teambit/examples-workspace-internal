import React from 'react';
import classnames from 'classnames';
import { Tag } from '@teambit/bad-jokes.ui-primitives.tag';
import styles from './tag-list.module.scss';

type TagListProps = {
  onPick?: (tag: string) => any;
  children: string[];
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * renders an array of tags
 */
export function TagList({children, className, onPick, ...rest}: TagListProps) {

  return (
    <div {...rest} className={classnames(className, styles.tagList)}>
      {children &&
        children.map((tag: string) => (
          <Tag key={tag} onPick={onPick}>
            {tag}
          </Tag>
        ))}
    </div>
  );
}
