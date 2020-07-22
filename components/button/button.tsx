import React, {ButtonHTMLAttributes} from 'react'
import styles from './button.module.scss'


export interface IButton extends  ButtonHTMLAttributes<HTMLButtonElement> {
    /** Choose between primary and secondary styling. */
    variant : 'primary' | 'secondary';
}


const Button = ({children , onClick, variant, ...rest} : IButton) => {
    return (
        <button className={styles[variant]} {...rest}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    variant: 'primary'
}


export default Button;

