import React from 'react';
import { AppBar } from './app-bar';
import { Section } from '@teambit/documenter.ui.section';

export default function Overview() {
    return(
        <Section />
    )
};

Overview.abstract = 'An imperfect app bar with or without a logo.';

Overview.labels = ['react', 'typescript', 'app-bar', 'ui'];

Overview.examples = [
  {
    scope: {
      AppBar,
    },
    title: 'Using the App Bar component',
    description: <div>Using the App Bar without a logo</div>,
    code: `
    () => {
        const menuItems = [
            {label: 'First Item', action: () => {console.log('Clicked: first item')}},
            {label: 'Second Item'}
        ]
    
        return(
            <AppBar items={menuItems} />
        )
    }
    `,
  },
  {
    scope: {
        AppBar,
    },
    description: 'Using the App Bar without a logo',
    code: `
    () => {
        const menuItems = [
            {label: 'First Item'},
            {label: 'Second Item'}
        ]
    
        const logoImage = 'https://bad-jokes-app.firebaseapp.com/static/media/smile.46ed6de2.png'
    
        return(
            <AppBar items={menuItems}>
                BadJokes <img style={{height: '26px'}} src={logoImage} />
            </AppBar>
        )
    }
    `,
  },
];


// const ex = () => {
//     const menuItems = [
//         {label: 'First Item', action: () => {console.log('Clicked: first item')}},
//         {label: 'Second Item'}
//     ]

//     return(
//         <AppBar items={menuItems} />
//     )
// }

// const ex2 = () => {
//     const menuItems = [
//         {label: 'First Item'},
//         {label: 'Second Item'}
//     ]

//     const logoImage = 'https://bad-jokes-app.firebaseapp.com/static/media/smile.46ed6de2.png'

//     return(
//         <AppBar items={menuItems}>
//             BadJokes <img style={{height: '26px'}} src={logoImage} />
//         </AppBar>
//     )
// }