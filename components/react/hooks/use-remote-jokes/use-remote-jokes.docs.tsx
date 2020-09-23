import React, {useEffect } from 'react';
import { useRemoteJokes } from './use-remote-jokes';
import styles from './use-remote-jokes-docs.module.scss';
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
            <HighlightedText>useRemoteJokes()</HighlightedText> returns an array with the following:
          </Paragraph>
          <List element="ol" spacing="lg">
            {[
              `A function that retrieves a joke from sv443.net/jokeapi`,
              `The retrieved joke (string)`,
              `A boolean that signifies whether the fetch promise has been resolved`,
              `An error message (or an empty string)`,
            ]}
          </List>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A React hook that fetches Jokes from sv443.net/jokeapi.';
Overview.labels = ['react', 'hook'];

Overview.examples = [
  {
    scope: {
      useRemoteJokes,
      useEffect,
      styles,
      Button
    },
    title: 'Using the useRemoteJokes hook',
    description: <div>example description with JSX</div>,
    code: `
    () => {
        const [getJoke, joke, isLoading, error] = useRemoteJokes();

        useEffect(() => {
            getJoke()
        }, [])
    
        return (
          <div className={styles.contentWrapper}>
            { error || joke }
            <div className={styles.buttonsWrapper}>
              <Button variant="secondary" disabled={isLoading} onClick={getJoke}>
                {'another joke'}
              </Button>
            </div>
          </div>
        );
      };
    `
    }
];
