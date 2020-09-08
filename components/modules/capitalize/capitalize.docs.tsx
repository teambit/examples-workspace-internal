import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Section } from '@teambit/documenter.ui.section';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';

const codeString = `capitalize("my upper case letters")
// => MY UPPER CASE LETTERS
`;

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <LinkedHeading link="Arguments">Arguments</LinkedHeading>
          <Paragraph>
            [string=''] (string): The string to capitalize.<br />
          </Paragraph>
          <LinkedHeading link="Example">Example</LinkedHeading>
          <CodeSnippet>{codeString}</CodeSnippet>
        </Section>
      </>
    </ThemeContext>
  )
}

export const labels = ['strings']

export const abstract = 'Converts all character of string to upper case.'
