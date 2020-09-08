import React from 'react';
import { Button } from './button';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';

export const abstract = "An imperfect button.";

export const labels = ["react", "typescript", "button"];

export default () => {
    return(
        <ThemeContext>
            <>
                <Section>
                    <LinkedHeading link='guidelines'>Guidelines</LinkedHeading>
                    <List spacing="lg">
                        {
                            [
                                `Place buttons where users expect to find them. Do not force users to "hunt for buttons".`,
                                `Do not use generic lables for your buttons. Use verbs that clearly explain the button's function.`,
                                `Size buttons in proportion to their importance.`
                            ]
                        }
                    </List>
                </Section>
                <Separator />
            </>
        </ThemeContext>
    )
}

const codeStringVariants = `
<Button variant='primary'> button </Button>
`
const codeStringNativAtt = `
<Button disabled> button </Button>
`

export const examples = [
    {
        scope: {
            Button
        },
        title: "Using the Button component",
        description: "Replace the variant prop value from 'primary' to 'secondary', to switch to the 'secondary' styling.",
        code: codeStringVariants
    },
    {
        scope: {
            Button
        },
        description: "Use the Button component with any (native) HTML button attribute.",
        code: codeStringNativAtt
    }
]
