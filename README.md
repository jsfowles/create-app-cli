# create-vf-app

**create-vf-app** is a Command Line Interface (CLI) tool developed for the purpose of creating and scaffolding Vectorform Next.js starter repositories.

## Getting Started

### Installation

Install the CLI tool globally using npm:

```bash
npm install -g create-vf-app
```

### Usage

Upon successful installation, the CLI tool can be accessed via the command:

```bash
create-vf-app <template> <name>
```

The `<template>` argument corresponds to the SSH or HTTPS URL of the Git repository you wish to clone as a template.

The `<name>` argument represents the desired name of your new repository.

As an example, if you wanted to create a new repository create-vf-app` based on an existing repository at `https://github.com/user/repository.git`, you would enter:

```bash
create-vf-app https://github.com/user/repositocreate-vf-app
```

## CLI Command

The CLI tool currently supports a single command:

- `create-vf-app <template> <name>`

  This command carries out the following operations:

  - Clones the repository specified in the `<template>` argument.
  - Removes the existing `.git` directory to start with a clean history.
  - Initializes a new Git repository.
  - Names the new repository as per the `<name>` argument.

## License

This project is licensed under the ISC License.

## Contact

For any queries, feel free to reach out to [jfowles@vectorform.com](mailto:jfowles@vectorform.com).
