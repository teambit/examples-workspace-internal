import React from 'react';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Section } from '@teambit/documenter.ui.section';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import styles from './index';

Overview.labels = ['css', 'module', 'scss', 'external', 'import'];

Overview.abstract = 'An example of how to create a css component you can import into your components';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <LinkedHeading link="Overview">Componentized CSS</LinkedHeading>
          <Paragraph>
              Using CSS as a component is a relatively undocumented phenomenon, but can be a very powerful tool
              for creating shareable CSS templates as well as sharing 'global' styling and variables; without needing
              to actually make them global, and whilst taking advantage of the many strengths of css modules.
          </Paragraph>
          <Paragraph>
              The key to the magic of a CSS component is in creating an index.js (or .ts) file alongside the CSS files you want 
              to componentize, which becomes an entry file into the component. 
              By simply exporting the styles as is, you can then consume the component with a simple "import styles from 'component-path'" (no need for /index as npm 
              knows to go there) and presto your styles can be used as styles.css_class
          </Paragraph>
          <Paragraph>
              Here we've used css (or scss in this case) modules as they have a number of additional benefits (e.g. no css collisions), which are supported out of the box 
              by the default Bit react environment (as is less/less modules). You can also use standard css files for the same effect.
          </Paragraph>
        </Section>
      </>
    </ThemeContext>
  );
}
export const labels = ['css', 'module', 'external', 'import'];

export const abstract = 'An example of how to create a css component you can import into your components';


const codeString = `() => {
    return (
      <>
        <p className={styles.reddish}>Lovely styling from my css component</p>
      </>
    )
  }`;

export const examples = [
    {
        scope: {
            styles,
        },
        title: 'Using styles from a css component',
        description: "Change the classname to styles.blueish to see the styling change from the external module",
        code: codeString,
    },
];

