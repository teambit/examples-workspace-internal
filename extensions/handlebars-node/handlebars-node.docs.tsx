
import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';

export default function Overview() {
  return (
      <>
        <Section>
          <LinkedHeading link="guidelines">Guidelines</LinkedHeading>
          <List spacing="lg">
            {[
              `This is a basic extension of Bit's base Node development environment`,
              `It includes support for building handlebar.js templates via webpack`
            ]}
          </List>
        </Section>
        <Separator />
    </>
  );
};


Overview.abstract = 'Customized Node environment for Bit, with handlebars support via webpack';

Overview.labels = ['extension', 'node', 'handelbars', 'webpack'];