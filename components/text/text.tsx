import React, {HTMLAttributes} from 'react'
import styles from './text.module.scss';
import cn from 'classnames';


export interface IText extends HTMLAttributes<HTMLDivElement>{
    /** The font size. */
    size: 'x-lg' | 'lg' | 'md' | 'sm';
    /** The font's color. */
    color: 'regular' | 'muted';
}


export const Text = ({size, color, children}: IText) => {
    return (
        <div className={cn(styles.text, styles[size], styles[color])}>
            {children}
        </div>
    )
}

Text.defaultProps = {
    size: 'md',
    color: 'regular'
  };

