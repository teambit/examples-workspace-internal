# A Bit Workspace for the BadJokes app

![](https://user-images.githubusercontent.com/49904302/82163669-545b6600-98b5-11ea-91ac-b63534416605.png)

## Setup instructions

see description about a bit workspace [here](https://bit-new-docs.netlify.app/docs/workspace/overview).

1. install Bit pre-prod version - `npm i -g @teambit/bit`
1. Clone this repo
1. `cd` to the root directory and run `bbit install`
1. Open the code in your favorite editor
1. run `bbit link` (see the result in the `./node_modules/@teambit/` dir)
1. run `bbit start`

> the pre-release binary is called `bbit`, not `bit`.

### Make it your own

1. `rm -rf ./node_modules/@teambit`
1. `bbit untrack *`
1. create directories according to how you see fit your workspace
1. open `workspace.jsonc`
1. in `teambit.bit/workspace` edit:
  - `name` - your project name
  - `defaultScope` - default scope for all components `<your-company>.<default-collection>`
1. in `teambit.bit/variants`
  - configure the different directories in the workspace
  - `defaultScope` - define the default scope for components in a specific variant.

### workspace operations

#### Create new components

To create a new component create the component's directory and it's containing files.

- must create a barrel file named `index.ts`
- create `*.docs.tsx` to manually control documentation
- create `*.composition.tsx` to create composition for development
- create `*.specs.ts` for creating jest tests.

when dir created, run `bit add path/to/new/component --namespace <namespace>`.

see new component in the web ui.

#### Run tests

`bit test`

#### Adding dependency

1. open `workspace.jsonc` file
1. add new dependency and version
1. run `bbit install`

### If using VSCode

Configure node module debug as shows in this issue - https://github.com/microsoft/vscode/issues/102042#issuecomment-656402933
