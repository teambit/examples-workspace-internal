import React from 'react'
import {AppBar} from './app-bar'


const menuItems = [
    {label: 'Explore New Jokes', action: () => console.log('Clicked: Explor new Jokes')},
    {label: 'Saved Jokes', action: ()=> console.log('Clickd: Saved jokes')}
]

const logoImg = 'https://bad-jokes-app.firebaseapp.com/static/media/smile.46ed6de2.png'

export const Compo = () => {
    return(
        <AppBar items = {menuItems}><img style={{height: '26px'}} src={logoImg}></img></AppBar>
    )
}