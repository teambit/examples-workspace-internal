import React from 'react'
import styles from './card.module.scss'
import cn from 'classnames';

export interface ICard {
    /** The card's width */
    size: 'fullWidth'| 'md'| 'sm';
    /** The card's content */
    children: any;
}

/** An imperfect card */
export const Card = ({size, children} : ICard) => {
    return (
        <div className={cn(styles.card, styles[size])}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    size: 'md'
}
