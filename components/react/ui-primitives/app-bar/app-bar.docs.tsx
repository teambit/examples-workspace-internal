import { AppBar } from './app-bar';

export default function Overview() {
    return null;
};

Overview.abstract = 'An imperfect app bar with or without a logo.';

Overview.labels = ['react', 'typescript', 'app-bar', 'ui'];

Overview.examples = [
  {
    scope: {
      AppBar,
    },
    title: 'Using the App Bar component',
    description: `A simple app bar.`,
    code: `
    () => {
        const menuItems = [
            {label: 'First Item', action: () => alert('first')},
            {label: 'Second Item', action: () => alert('second')}
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
    description: 'An App Bar with a custom element (a logo).',
    code: `
    () => {
        const menuItems = [
            {label: 'First Item', action: () => alert('first')},
            {label: 'Second Item', action: () => alert('second')}
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
  {
    scope: {
        AppBar,
    },
    description: 'An App Bar with the sceond item set as its default selection.',
    code: `
    () => {
        const menuItems = [
            {label: 'First Item', action: () => 'x'},
            {label: 'Second Item', action: () => 'y'}
        ]
    
        const logoImage = 'https://bad-jokes-app.firebaseapp.com/static/media/smile.46ed6de2.png'
    
        return(
            <AppBar items={menuItems}  defaultItem='Second Item'/>
        )
    }
    `,
  }
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