# This is an internal workspace for various mini POCs and use cases for Harmony
To be used for sandboxing various workflows and configs to both try them out and make sure they aren't broken by changes to Bit. 
We don't want to confuse customers with all the various possibilities and options (e.g. js + ts + scss + stlyedJsx, etc etc) so please check before sharing outside of Bit.

Thebidea is eventually to export all the stable examples to an examples Scope under Teambit in bit.dev

Please see the [public Harmony Beta Project](https://github.com/teambit/bad-jokes-workspace) readme for guidance on using Harmony Bit.

# Use-cases and Configs Showcased Here

## Components

### Javascript-only components

Components which dont need a typescript compiler. Generally they have been setup with a Babel environment, but at least one also compiles with the typescript compiler from the base react environment.

Under the `javascript` namespace.

### StyledJsx 

Another use-case from a beta-program partner. StyledJsx is almost exclusively used in conjunction with next.js (because why would you choose it as your styling method otherwise...). Here we've implemented a version of the babel-only env below, which includes the plugins required to compile styledJsx, as well as the correct dependencies for being able to consume the components in a next.js application.

This is implemented on the Container component, where the css has been replaced with styledjsx.

### Css components

These are key to creating themes and templates via Bit components. There is *very* little documentation available anywhere on how to componentize and then consume css content (in all its flavours), so this is an important section of this project. 

Under the `styling` namespace.

Note: they are currently created with a react environment. Hopefully by the time you read this we'll have made a css-specific environment.

### Handlebars

Use case for creating handlebars components, in which data is passed to the component and inserted into the handlebars template, to output html.


## Environments and Compilers

### Babel-only (i.e. not TS) environment

This env implements a babel compiler and then switches out the default TS compiler. 
