import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';
import { Paragraph } from '@teambit/documenter.ui.paragraph';

export default function Overview() {
  return (
    <ThemeContext> 
      <>
        <Section>
          <LinkedHeading link="guidelines">Guidelines</LinkedHeading>
          <Paragraph>
              Some javascript utilities from the reactstrap internal collection (https://bit.dev/reactstrap/reactstrap/internal/utils). <br/>
              Includes the following functions:
          </Paragraph>
          <List spacing="lg">
            {[
              `getScrollbarWidth`,
              `setScrollbarWidth`,
              `isBodyOverflowing`,
              `getOriginalBodyPadding`,
              `conditionallyUpdateScrollbar`,
              `setGlobalCssModule`,
              `mapToCssModules`,
              `omit`,
              `pick`,
              `warnOnce`,
              `deprecated`,
              `DOMElement`,
              `and more...`
            ]}
          </List>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
};


Overview.abstract = 'Some javascript utilities from the reactstrap internal collection (https://bit.dev/reactstrap/reactstrap/internal/utils)';

Overview.labels = ['react', 'javascript', 'utils'];


