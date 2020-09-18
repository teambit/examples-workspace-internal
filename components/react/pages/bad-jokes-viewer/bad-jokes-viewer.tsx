import React from 'react';
import styles from './bad-jokes-viewer.module.scss';
import { Button } from '@teambit/bad-jokes.ui-primitives.button';
import { useGetJokes } from '@teambit/bad-jokes.hooks.use-get-jokes';
import {useFavorites} from '@teambit/bad-jokes.hooks.use-favorites';



/** Retrieves and displays bad jokes */
export const BadJokesViewer = ({favorites = false}) => {
  const [getJoke, joke, isLoading, error] = useGetJokes();
  const [numOfFavs, loadJoke, favJoke, saveJoke, removeJoke] = useFavorites();

  const renderString = (text : string) => {
    const textArr = text.split('\n');
    return (
      textArr.map((line, key) => <p key={key}>{line}</p>)
    )
  }
  
  if (!favorites){
    return(
      <div className={styles.badJokesViewer}>
        <div className={styles.contentWrapper}>
          {  error || renderString(joke) }
        </div>
        <div className={styles.buttonsWrapper}>
          <Button 
            disabled={isLoading} onClick={getJoke}>
            {isLoading ? 'loading...' : 'another one, please'}
          </Button>
          <Button 
            variant='secondary' 
            onClick={favorites ? removeJoke : () => saveJoke(joke)}>
            save
          </Button>
        </div>
    </div>
    )
  } else {
      return(
        <div className={styles.badJokesViewer}>
      <div className={styles.contentWrapper}>
          {  renderString(favJoke) }
        </div>
        <div className={styles.buttonsWrapper}>
          <Button disabled={!numOfFavs} onClick={loadJoke}>
            {'next one, please'}
          </Button>
          <Button 
            variant='secondary' disabled={!numOfFavs} onClick={removeJoke}>
            delete
          </Button>
        </div>
    </div>
      )

  }
};
