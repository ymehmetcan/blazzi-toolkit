<div align="center">

# @blazzi/commitlint-config

[![npm](https://img.shields.io/npm/v/@blazzi/commitlint-config?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/commitlint-config)

</div>

## Introduction

This sharable `commitlint` configuration package is designed to help maintain a standardized and readable commit history for our projects. It ensures that all commit messages adhere to a defined format, making the version history cleaner and more informative. Currently extends `@commitlint/config-conventional` and adds some extra rules.

## Installation

#### Install the package as a development dependency:

With `pnpm`:

```sh
pnpm add --save-dev @blazzi/commitlint-config
```

With `yarn`:

```sh
yarn add --dev @blazzi/commitlint-config
```

With `npm`:

```sh
npm install --save-dev @blazzi/commitlint-config
```

## Usage

Once installed, configure `commitlint` to use the `@blazzi/commitlint-config` package. Create or edit your `commitlint` config file (commonly `commitlint.config.cjs` or `.commitlintrc.js`) as follows:

```js
module.exports = {
  extends: ['@blazzi/commitlint-config'],
};
```

or you can also omit the `commitlint-config` part of the name and just use `@blazzi` as the package name.

```js
module.exports = {
  extends: ['@blazzi'],
};
```

## Commit Message Format

This configuration enforces the following commit message structure:

```
<type>(<scope>): <subject>
```

- **Type**: Indicates the purpose of the commit (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`).
- **Scope**: A context or category for the commit (e.g., `login`, `user-interface`). It's optional and should be in lowercase and kebab-case.
- **Subject**: A brief description of the change. It should start with a lowercase letter and be concise.

## Examples

### Valid Commit Messages

- `feat(auth): implement user authentication`
- `fix(api): resolve data fetching issue`
- `docs(readme): update installation instructions`

### Invalid Commit Messages

- `Feature: Add new feature` (incorrect type format)
- `fix(Login): fix login error` (scope should be in lowercase)
- `fix: fix error` (subject should not repeat the type)

## Contributing

Your contributions are welcome! Please adhere to this commit message convention when submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

&copy; 2024 [Mehmetcan YILMAZ](https://github.com/ymehmetcan)
