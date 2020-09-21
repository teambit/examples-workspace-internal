import React, {ReactElement} from 'react';
import cs from 'classnames'
import styles from './container.module.scss'

export type ContainerProps = {
    children: any,
    className?: string;
    floatEffect?: boolean
}

export const Container = ({className, children, floatEffect = true} : ContainerProps) => {
    return(
     <div className={cs(styles.container, floatEffect ? styles.float : null, className)}>
        {children}
     </div>   
    )
}