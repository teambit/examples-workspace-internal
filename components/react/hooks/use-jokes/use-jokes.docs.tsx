import React, {useEffect } from 'react';
import { useJokes } from './use-jokes';
import styles from './use-jokes-docs.module.scss';
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
            <HighlightedText>useJokes()</HighlightedText> returns an array with the following:
          </Paragraph>
          <List element="ol" spacing="lg">
            {[
              `A function to toggle between remote/local jokes`,
              `A function that retrieves a joke`,
              `The retrieved joke (string)`,
              `An error message (or an empty string)`,
              `A boolean that signifies whether it is possible to retrieve another joke`,
              `A function that saves a joke in the local storage`,
              `A function that removes a joke from the local storage`
            ]}
          </List>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A composition of useRemoteJokes & useLocalJokes. This hook fetches jokes and manages saved jokes in the local storage.';
Overview.labels = ['react', 'hook'];

Overview.examples = [
  {
    scope: {
      useJokes,
      useEffect,
      styles,
      Button
    },
    title: 'Using the useJokes hook',
    description: <div>Toggle between local and remote jokes using the local prop.</div>,
    code: `
    ({ local = false } ) => {
        const [setIsLocal, getJoke, joke, error, disableGetJoke, saveJoke, removeJoke] = useJokes(local);
      
        useEffect(() => {
          setIsLocal(local);
        }, [local]);
      
        return (
          <div>
            <div className={styles.contentWrapper}>{ error || joke }</div>
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
          </div>
        );
      };
    `
    }
];
