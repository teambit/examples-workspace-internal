import React, {useState} from 'react'
import { AppBar } from '@teambit/bad-jokes.ui-primitives.app-bar'
import { BadJokesViewer } from '@teambit/bad-jokes.pages.bad-jokes-viewer'

export const BadJokesPage = () => {
    const [isFavorites, setIsFavorites] = useState(false)
    return(
        <div>
            <AppBar>
                <AppBar.Item action={setIsFavorites(false)}>
                    {'Explore Jokes'}
                </AppBar.Item>
                <AppBar.Item action={setIsFavorites(true)}>
                    {'Favorites'}
                </AppBar.Item>
                <AppBar.Logo>
                    <img style={{height: '39px'}} src={'./smile.png'} alt="smile logo"></img>
                </AppBar.Logo>
            </AppBar>
            <BadJokesViewer local={isFavorites}/>
        </div>
    )
}