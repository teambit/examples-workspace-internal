import React, {ReactElement} from 'react';
import cs from 'classnames'
import styles from './container.module.scss'

export type ContainerProps = {
    /** The container content. */
    children: any,
    /** A className for customization */
    className?: string;
    /** Determines whether to style the container as "floating" */
    floatEffect?: boolean
}

export const Container = ({className, children, floatEffect = true} : ContainerProps) => {
    return(
     <div className={cs(styles.container, floatEffect ? styles.float : null, className)}>
        {children}
     </div>   
    )
}