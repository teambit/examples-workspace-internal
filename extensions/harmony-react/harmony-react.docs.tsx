import React from "react"; 
import { Section } from "@teambit/documenter.ui.section";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { LinkedHeading } from "@teambit/documenter.ui.linked-heading";
import { List } from "@teambit/documenter.ui.list";
import { Separator } from "@teambit/documenter.ui.separator";

export const abstract = "Customized React environment.";

export const labels = ["extension", "react", "typescript", "jest", "webpack"];

export default () => {
  return (
    <ThemeContext>
      <>
        <Section>
          <LinkedHeading link="guidelines">Guidelines</LinkedHeading>
          <List spacing="lg">
            {[
              `Configure this extension in your workspace.jsonc file.`,
              `Modify component build and test by modifying this extension's implementation.`,
              `"package-name" part of the docs is irrelevant. documentation template will be different for extensions.`
            ]}
          </List>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
};