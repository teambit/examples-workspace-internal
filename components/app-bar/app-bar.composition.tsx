import React from 'react';
import {AppBar} from './app-bar'

export const StandardAppBar = () => {
    return(
    <div style={{minWidth: "400px"}}>
        <AppBar>
            <AppBar.Item path="#">Item</AppBar.Item>
            <AppBar.Logo>
                <img style={{height: '39px'}} src='https://res.cloudinary.com/blog-assets/image/upload/v1595434938/smile.46ed6de2_w0dnt1.png'></img>
            </AppBar.Logo>
	    </AppBar>
    </div>
    )
}