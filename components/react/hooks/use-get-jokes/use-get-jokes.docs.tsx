import React from 'react';
import { useGetJokes } from './use-get-jokes';
import { List } from '@teambit/documenter.ui.list';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { Separator } from '@teambit/documenter.ui.separator';
import { Paragraph } from '@teambit/documenter.ui.paragraph';

export const abstract = 'A hook that fetches jokes';
export const labels = ['hook', 'typescript', 'react', 'fetch'];

export default function Overview() {
  const [getJoke, joke, isLoading, error] = useGetJokes();

  return (
    <ThemeContext>
      <>
        <Section>
          <LinkedHeading link="overview">Overview</LinkedHeading>

          <Paragraph>This hook retrieves jokes from a jokes API. It returns the following variables:</Paragraph>
          <List element="ol" spacing="lg">
            {[
              `"getJokes": The data-fetching function`,
              `"joke": The retrieved data`,
              `"isLoading": The state of the data-fetching function`,
              `"error": An error message (or an empty string)`,
            ]}
          </List>
        </Section>
        <Separator />
        <Section>
          <LinkedHeading link="example">Example</LinkedHeading>
          <Paragraph>You can even use components directly in the docs!</Paragraph>
          <div>
            <div>{error || joke.map((line, key) => <p key={key}>{line}</p>)}</div>
            <div>
              <Button disabled={isLoading} onClick={getJoke}>
                {isLoading ? 'loading...' : 'fetch a joke'}
              </Button>
            </div>
          </div>
        </Section>
      </>
    </ThemeContext>
  );
}
