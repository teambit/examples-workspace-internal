# Bad-jokes app with Harmony

**IMPORTANT** the pre-release binary is called `bbit`, not `bit`. **IMPORTANT**

See docs [here](https://bit-new-docs.netlify.app/docs/workspace/overview).

## Install pre-release

The pre-release version is published as a different package.  
At the moment the installation process is rather slow. We'll be removing dependencies and deprecate many parts of the codebase to speed up the process.

```sh
npm i -g @teambit/bit
yarn global add @teambit/bit
```

## Local development workflow only

bit.dev does not yet support exporting and importing components made with the pre-release version. Use this project to test Bit's new local capabilities.

## Setup instructions

1. Clone this repo
1. `cd` to the root directory and run `bbit install`
1. Open the code in your favorite editor
1. run `bbit start`

## workspace operations

### Workspace configuration

See details about project configuration in the `workspace.jsonc` file.

### Customize React configuration

This project contains a local Bit extension that customized the base React Component Environment.  
It is located in `extension/react` directory. It uses a specific set of APIs to override configuration files for the environment.  
The extension is already managed as a Bit component, so you can configure it in the `workspace.jsonc` file as a Component Environment for any of the `variants`.

To further modify TypeScript, Jest or Webpack configuration you need to modify the configuration files in the `extensions/react/<tool-name>` file.

> When import/export support is available you'll be able to export the customized extension and use it in other workspaces.

## Workflow

```sh
bbit install                 # Install project dependencies.
bbit compile                 # Compile components (important because of the local React extension)
bbit start                   # Run workspace UI
bbit test                    # Run componetn tests
bbit install <package name>  # Add a new dependency
bbit add <path to component> # Add a new component (see full instructions below)
```

### Create new components

Component scaffolding is not yet implemented in the pre-release. To create new components:

- Create a directory for the component in the right location.
- Create the main implementation file of the component in the component's root directory.
- Create a barrel file named `index.ts` and have it export the APIs from the component's implementation.
- Create `*.composition.tsx` to create a composition for development.
- Create `*.specs.ts` for creating jest tests.
- Create `*.docs.tsx` to manually control documentation.
- Create more files as needed (`scss`, `svg`, `tsx`).

When the dir is created, run `bit add <path to component root dir> --namespace <namespace>`.

see the new component in the web UI.

## Missing

1. No automated documentation generation for node-components.
1. No test-summary in the workspace UI.
