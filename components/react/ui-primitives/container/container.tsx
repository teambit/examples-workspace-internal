import React, {ReactElement} from 'react';
import cs from 'classnames';

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
    <div>
        <style jsx global>
            {`@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');`}
        </style>
        <style jsx>{`
          .container {
            border: solid 7px #41403e;
            border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
            line-height: 1.5;
            padding: 25px;
            font-family: 'Indie Flower', cursive;
            font-size: 22px;
            max-width: 500px;
            }

            .float {
                box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
                transition: box-shadow 0.5s;
            }

            .float:hover  {
                    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
            }
        `}</style>
        <div className={cs('container', floatEffect ? 'float' : null, className)}>
            {children}
        </div>   
     </div>
    )
}