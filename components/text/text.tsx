import React, {HTMLAttributes} from 'react'
import styles from './text.module.scss';
import cn from 'classnames';


export interface IText extends HTMLAttributes<HTMLParagraphElement>{
    /** The font size. */
    size: 'x-lg' | 'lg' | 'md' | 'sm';
    /** The font's color. */
    color: 'regular' | 'muted';
}


const Text = ({size, color, children}: IText) => {
    return (
        <p className={cn(styles.text, styles[size], styles[color])}>
            {children}
        </p>
    )
}

Text.defaultProps = {
    size: 'md',
    color: 'regular'
  };


  export default Text;