import React from 'react';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Section } from '@teambit/documenter.ui.section';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Tag } from '@teambit/bad-jokes.ui-primitives.tag';

Overview.labels = ['react', 'ui-component', 'tags'];

Overview.abstract = 'A tag labels UI objects for quick recognition and navigation.';

// Overview.examples = [
//   {
//     scope: {
//       Tag,
//     },
//     title: 'Using the Button component',
//     description:
//       <div>example description with JSX</div>,
//     jsx: <Tag style={{backgroundColor: '#414141', color: 'white'}}>dark Tag</Tag>
//   },
// ];

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <LinkedHeading link="Overview">Overview</LinkedHeading>
          <Paragraph>
            Tags are valuable for:
          </Paragraph>
          <List>{["Annotating properties.", "Links for aggregated data.", "Joyful fridays at the beach."]}</List>
        </Section>
      </>
    </ThemeContext>
  )
}
