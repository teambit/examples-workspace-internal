import React, {useState} from 'react';
import { BadJokesViewer } from './bad-jokes-viewer';
import { AppBar } from '@teambit/bad-jokes.ui-primitives.app-bar'

export const FullPage = () => {

  const [isLocal, setIsLocal] = useState(false)

  const menuItems = [
    {label: 'Explore New Jokes', action: () => setIsLocal(false)},
    {label: 'Saved Jokes', action: ()=> setIsLocal(true)}
]

  return (
    <div>
        <AppBar items={menuItems} style={{marginBottom: '25px'}}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BadJokesViewer local={isLocal} />
        </div>
    </div>
  );
};


export const RemoteJokes = () => {

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BadJokesViewer local={false} />
        </div>
    </div>
  );
};

export const LocalJokes = () => {

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BadJokesViewer local={true} />
        </div>
    </div>
  );
};
