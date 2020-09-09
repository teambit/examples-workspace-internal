import React from 'react';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Section } from '@teambit/documenter.ui.section';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Playground } from '@teambit/documenter.code.react-playground';
import { Tag } from './tag';

export const labels = ['react', 'ui-component', 'tags'];

export const abstract = 'A tag labels UI objects for quick recognition and navigation.';

const basicExample = `<Tag style={{backgroundColor: '#414141', color: 'white'}}>dark Tag</Tag>`;
const scope = { Tag };

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <LinkedHeading link="Overview">Overview</LinkedHeading>
          <Paragraph>Tags are valuable for:</Paragraph>
          <List>{['Anonating properties.', 'Links for aggregated data.', 'Joyful fridays at the beach.']}</List>
        </Section>
        <Section>
          <LinkedHeading link="Example">Example</LinkedHeading>
          <Playground code={basicExample} scope={scope} />
        </Section>
        <br />
      </>
    </ThemeContext>
  );
}
