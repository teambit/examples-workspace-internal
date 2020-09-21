import React, { Component } from 'react'
import styles from './app-bar.module.scss'

export class AppBar extends Component {

    static Item = ({action, children}) => {
        return <li onClick={ action}>{children}</li>
    }
        
    static Logo = ({children}) => {
        return (
            <div className={styles.logo}>
                {children}
            </div>
        )
    }

    render() {
        return (
            <div className={styles.appBar}>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}