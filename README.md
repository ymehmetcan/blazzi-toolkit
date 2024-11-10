<div align="center">
  <img src="./assets/blazzi-logo-dark-bg.svg" alt="Blazzi Logo" title="Blazzi Logo"/>
</div>

<h1 align="center">
  Blazzi Toolkit

[![License: MIT](https://img.shields.io/badge/License-MIT-EA6A13.svg)](LICENSE)

</h1>

<h4 align="center">
  JavaScript Toolkit that contains common configurations for building web applications.
</h4>

## Usage

This repository is structured as a monorepo, comprising several npm packages. Each package within this monorepo is self-contained with its own `README` and dedicated documentation. These documents provide detailed instructions on the package's usage and any other relevant information.

### Package Index

| Package                                                     | NPM                                                                                                                                          |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@blazzi/commitlint-config`](./packages/commitlint-config) | [![npm](https://img.shields.io/npm/v/@blazzi/commitlint-config?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/commitlint-config) |
| [`@blazzi/eslint-config`](./packages/eslint-config)         | [![npm](https://img.shields.io/npm/v/@blazzi/eslint-config?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/eslint-config)         |
| [`@blazzi/eslint-plugin`](./packages/eslint-plugin)         | [![npm](https://img.shields.io/npm/v/@blazzi/eslint-plugin?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/eslint-plugin)         |
| [`@blazzi/stylelint-config`](./packages/stylelint-config)   | [![npm](https://img.shields.io/npm/v/@blazzi/stylelint-config?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/stylelint-config)   |
| [`@blazzi/prettier-config`](./packages/prettier-config)     | [![npm](https://img.shields.io/npm/v/@blazzi/prettier-config?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/prettier-config)     |
| [`@blazzi/ts-config`](./packages/ts-config)                 | [![npm](https://img.shields.io/npm/v/@blazzi/ts-config?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/ts-config)                 |

## Prerequisites

Before you begin, ensure you have `node: >=20.18` installed on your system. This project uses `pnpm` as the package manager.

### Installing pnpm

> [!TIP]
> If you don't have `pnpm` installed, you can install it either globally on your system or activate it for this project only.

#### Global Installation

To install `pnpm` globally, run the following command:

```bash
npm install -g pnpm
```

#### Using Corepack

With Node.js v16.17 or newer, you may install the `latest` version of pnpm by just specifying the tag:

```bash
corepack prepare pnpm@latest --activate
```

## Installing Project

To set up the project on your local machine, install dependencies by running the following command:

```bash
pnpm install
```

## Development

This project leverages `pnpm workspaces`, optimizing the management of package dependencies across the monorepo. Key tools and frameworks used in this project include:

- [**CommitLint**](https://commitlint.js.org/): Ensures that commit messages adhere to a conventional format.
- [**Prettier**](https://prettier.io/): Maintains consistent code formatting across the codebase.
- [**ESLint**](https://eslint.org/): Enforces code quality and style guidelines.
- [**Tsup**](https://github.com/egoist/tsup): Simplifies the TypeScript bundling process.
- [**Turbo**](https://turborepo.org/): Efficiently manages and runs build tasks across workspace projects.

> [!IMPORTANT]
> For developers contributing to this project, it's important to familiarize yourself with these tools, as they are integral to the workflow and code quality standards.

## Semantic Versioning

This project adheres to [Semantic Versioning (SemVer)](https://semver.org/). This approach allows users and contributors to understand the impact of updates and changes at a glance.

### Key Principles

- **MAJOR version** increments signify backward-incompatible changes.
- **MINOR version** increments indicate the addition of new, backward-compatible functionality.
- **PATCH version** increments are for backward-compatible bug fixes.

## Contributing

Your contributions are welcome! Please adhere to commit message and code-style conventions when submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

&copy; 2024 [Mehmetcan YILMAZ](https://github.com/ymehmetcan)
