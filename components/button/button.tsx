import React, {ButtonHTMLAttributes} from 'react'
import styles from './button.module.scss'


export type IButton  = {
    variant : 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>



const Button = ({children , onClick, variant, ...rest} : IButton) => {
    return (
        <button className={styles[variant]} onClick={onClick} {...rest}>
            {children}
        </button>
    )
}

export default Button;

