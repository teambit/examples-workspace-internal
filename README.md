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

### Importing components in the project

Each tracked component is linked to the root `node_modules` folder. Other component should use that module when importing the component, as an absolute path.

## Missing

1. No automated documentation generation for node-components.
1. No test-summary in the workspace UI.

## Workspace structure and design decisions

### Directory structure

The structure of a Bit workspace is flexible, as you can decide where to create each component.  
You can configure its structure by defining default settings for components according to their location in the project file tree. This is defined by the `variants` section in the `workspace.jsonc` file. Each `variant` defines default values for components in its tree. It is possible to have nested `variants`, but for simplicity it's recommended to avoid, as its much simpler to manage.

The variants define three directories for components:

#### `components/modules`

Directory to contain many helpers, tools and various Node modules to be shared across the project. All components tracked from that directory are configured with the base `teambit.bit/node` base **Component Development Environment** for Node modules.

#### `components/react`

Directory to manage all React components. Note that it has sub-directories for types of React components - `ui-primitives`, `pages` and `hooks`. These directories are not defined as `variants`. Components tracked in these directories gets their configuration from the `components/react` variant.  
The **Component Development Environment** defined for all React component is a local extension for Bit that uses the base `teambit.bit/react` environment and overrides certain parts of its implementation to fit the requirements of the project (more about it in the next section).

> This project aims to support additional frameworks as well, so it has a base `react` directory for components developed with React. In the future it'll contain sub-directories for Angular and other frameworks.

#### `extensions`

This workspace demoes the ability for extending Bit from the project. In this example the extension takes the `teambit.bit/react` **Component Development Environment** and uses it's APIs to override parts of its configuration.  
Extensions in Bit are components as well. This means that the `extensions/harmony-react` is tracked as a Bit component. For Bit to build this component as an extension the `extensions` variant configures `teambit.bit/aspect` as the Component Development Environment for all components managed in that directory.

### Component structure

#### Default component scope

The workspace is aimed at publishing components to a remote component collection called **teambit.bad-jokes**. This is managed in the `workspce.jsonc` file via the `teambit.bit/workspace` configuration entry. The `defaultScope` configured in that entry is set as the default prefix for all components in the workspace (a `variant` can override it).

#### Component module names

Bit does not couple the component module to its location in the directory tree. This means that the tracked components in this project have different names from their directories.  
For example:

- The directory `components/react/ui-primitives/button` is tracked as the component `teambit.bad-jokes/ui-primitives/button` (with the default prefix).
- The directory `components/modules/capitalize/` is tracked as the component `teambit.bad-jokes/hooks/use-get-jokes` (note the variant `components/modules` set a different `defaultScope`).

When you track a new component (`bbit add <path to component>`):

- Bit sets the prefix-ed `defaultScope` according to it's variant.
- Use the `--namespace` to add namespaces to the component.
- By default the component name is the name of the it's folder name (use the `--id` option to set another name).
