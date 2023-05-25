

# vf-create-app

A command-line tool to scaffold Vectorform starter repositories for Node.js applications.

## Installation

```bash
npm install -g vf-create-app
```

## Usage

```bash
vf-create-app <template> <name>
```

This command clones the `<template>` repository, removes its `.git` directory to start with a clean history, initializes a new Git repository, and names it `<name>`.

## Features

**Prompt to Add .prettierrc**: The script will prompt you if you want to add a `.prettierrc` file to your new repository. This file can contain your preferred code formatting settings. If a `.prettierrc` or `.prettierrc.json` file already exists in the cloned repository, you will be asked if you want to overwrite it.

## Dependencies

- Node.js and npm: The script is written in JavaScript for Node.js and is installed via npm.
- Commander: For parsing command-line options.
- Shelljs: To execute shell commands from within the JavaScript script.
- Inquirer: For interactive command-line prompts.

## Author

- jfowles jfowles@vectorform.com

## License

- ISC

