import React from 'react';
import cs from 'classnames';
import styles from './index';

export const reddishDiv = () => {
     return (
        <div> 
            <span className={cs(styles.reddish, styles.padding)}>
                Reddish example 
            </span>
        </div>
    )
} 

export const blueishDiv = () => {
    return (
       <div> 
           <span className={cs(styles.blueish, styles.padding)}>
                Blueish example
            </span>
       </div>
   )
} 

export const noPaddingDiv = () => {
    return (
       <div> 
           <span className={cs(styles.blueish)}>
                No padding example
            </span>
       </div>
   )
} 