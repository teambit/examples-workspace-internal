import React, {useEffect } from 'react';
import { useLocalJokes } from './use-local-jokes';
import styles from './use-local-jokes-docs.module.scss';
import { List } from '@teambit/documenter.ui.list';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { Button } from '@teambit/bad-jokes.ui-primitives.button';
import { Separator } from '@teambit/documenter.ui.separator';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { HighlightedText } from '@teambit/documenter.ui.highlighted-text';


export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <LinkedHeading link="overview">Overview</LinkedHeading>
          <Paragraph>
            <HighlightedText>useLocalJokes()</HighlightedText> returns an array with the following:
          </Paragraph>
          <List element="ol" spacing="lg">
            {[
              `A function that retrieves a joke from the localStorage`,
              `The retrieved joke (string)`,
              `An error message (or an empty string)`,
              `A function that saves a joke in the localStorage`,
              `A function that removes a joke from the localStorage`
            ]}
          </List>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A React hook that manages Jokes in the local storage.';
Overview.labels = ['react', 'hook'];

Overview.examples = [
  {
    scope: {
      useLocalJokes,
      useEffect,
      styles,
      Button
    },
    title: 'Using the useLocalJokes hook',
    description: <div>example description with JSX</div>,
    code: `
    () => {
        const [getJoke, joke, error, saveJoke, removeJoke] = useLocalJokes();
      
        const jokeExample  = 'knock knock...';

        useEffect(() => {
            getJoke()
        }, [])
    
        return (
          <div className={styles.contentWrapper}>
            { error || joke }
            <div className={styles.buttonsWrapper}>
              <Button variant="secondary" disabled={!!error} onClick={getJoke}>
                {'next joke'}
              </Button>
              <Button variant="secondary" onClick={() => saveJoke(jokeExample, getJoke)}>
                {'save joke'}
              </Button>
              <Button onClick={() => removeJoke(joke, getJoke)}>
                {'remove joke'}
              </Button>
            </div>
          </div>
        );
      };
    `
    }
];
