import React, {useState} from 'react';
import { BadJokesViewer } from './bad-jokes-viewer';
import {AppBar} from '@teambit/bad-jokes.ui-primitives.app-bar'

export const StandardExample = () => {

  const [isFavorites, setIsFavorites] = useState(false);

  return (
    <div>
      <AppBar>
        <AppBar.Item action={() => setIsFavorites(false)}>{'Explore Jokes'}</AppBar.Item>
        <AppBar.Item action={() => setIsFavorites(true)}>{'Favorites'}</AppBar.Item>
        <AppBar.Logo>
          BadJokes
          <img style={{ height: '30px' }} src={'https://bad-jokes-app.firebaseapp.com/static/media/smile.46ed6de2.png'} alt="smile logo"></img>
        </AppBar.Logo>
      </AppBar>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BadJokesViewer local={isFavorites} />
        </div>
    </div>
  );
};
