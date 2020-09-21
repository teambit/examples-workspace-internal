import React, { useEffect } from 'react';
import styles from './bad-jokes-viewer.module.scss';
import { Button } from '@teambit/bad-jokes.ui-primitives.button';
import { useJokes } from '@teambit/bad-jokes.hooks.use-jokes';
import { Container } from '@teambit/bad-jokes.ui-primitives.container';

export type BadJokesProps = {
  local: boolean;
  className?: string;
};

/** Retrieves and displays bad jokes */
export const BadJokesViewer = ({ local, className }: BadJokesProps) => {
  const [setIsLocal, getJoke, joke, error, disableGetJoke, saveJoke, removeJoke] = useJokes(local);

  const renderJoke = (text: string) => {
    const textArr = text.split('\n');
    return textArr.map((line, key) => <p key={key}>{line}</p>);
  };

  useEffect(() => {
    setIsLocal(local);
  }, [local]);

  return (
    <Container className={styles.minWidth}>
      <div className={styles.contentWrapper}>{error || renderJoke(joke)}</div>
      <div className={styles.buttonsWrapper}>
        <Button disabled={disableGetJoke} onClick={getJoke}>
          {disableGetJoke ? 'loading...' : 'another one, please'}
        </Button>
        <Button
          variant="secondary"
          disabled={disableGetJoke}
          onClick={() => (local ? removeJoke(joke, getJoke) : saveJoke(joke, getJoke))}
        >
          {local ? 'remove joke' : 'save joke'}
        </Button>
      </div>
    </Container>
  );
};
