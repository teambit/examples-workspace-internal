import React from 'react';
import styles from './bad-jokes-viewer.module.scss';
import { Button } from '@teambit/bad-jokes.ui-primitives.button';
import { useGetJokes } from '@teambit/bad-jokes.hooks.use-get-jokes';
import {useFavorites} from '@teambit/bad-jokes.hooks.use-favorites';



/** Retrieves and displays bad jokes */
export const BadJokesViewer = ({favorites = false}) => {
  const [getJoke, joke, isLoading, error] = useGetJokes();
  const [fetchFavJoke, favJoke, saveJoke] = useFavorites();

  const renderString = (text : string) => {
    console.log('text', text);
    const textArr = text.split('\n');
    return (
      textArr.map((line, key) => <p key={key}>{line}</p>)
    )
  }
  
  return (
    <div className={styles.badJokesViewer}>
      <div className={styles.contentWrapper}>
        { 
          favorites ? 
          renderString(favJoke) : 
          error || renderString(joke) 
        }
      </div>
      <div className={styles.buttonsWrapper}>
        <Button disabled={isLoading} onClick={favorites ? fetchFavJoke : getJoke}>
          {isLoading ? 'loading...' : 'another one, please'}
        </Button>
        <Button variant='secondary' onClick={() => saveJoke(joke)}>save</Button>
      </div>
    </div>
  );
};
