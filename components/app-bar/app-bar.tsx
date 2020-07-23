import React, { Component, ReactNode } from 'react'
import {Text} from '../Text';
import styles from './app-bar.module.scss';


type ItemProps = {
    path: string,
    children: ReactNode
}

export class AppBar extends Component {

    static Item = ({path, children} : ItemProps) => {
        return <li><a href={path}><Text size='lg'>{`[${children}]`}</Text></a></li>
    }
        

    static Logo : React.FC = ({children}) => {
        return (
            <div className={styles.logo}>
                {children}
            </div>
        )
    }

    render() {
        return (
            <div className={styles.app_bar}>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}