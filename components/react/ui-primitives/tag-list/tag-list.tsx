import React from 'react';
import classnames from 'classnames';
import { Tag } from '@teambit/bad-jokes.ui-primitives.tag';
import styles from './tag-list.module.scss';

type TagListProps = {
  /**
   * onClick function when selecting a tag
   */
  onPick?: (tag: string) => any;
  /**
   * content array to be presented inside the tags
   */
  tags: string[];
  /**
   * override tag class
   */
  tagClass?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * renders an array of tags
 */
export function TagList({ tags, className, tagClass, onPick, ...rest }: TagListProps) {
  return (
    <div {...rest} className={classnames(className, styles.tagList)}>
      {tags &&
        tags.map((tag: string) => (
          <Tag className={tagClass} key={tag} onPick={onPick}>
            {tag}
          </Tag>
        ))}
    </div>
  );
}
