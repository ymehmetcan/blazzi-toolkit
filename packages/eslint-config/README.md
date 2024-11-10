<div align="center">

# @blazzi/eslint-config

[![npm](https://img.shields.io/npm/v/@blazzi/eslint-config?label=npm&color=EA6A13)](https://npmjs.com/package/@blazzi/eslint-config)

</div>

## Installation

#### Install the package as a development dependency:

With `pnpm`:

```sh
pnpm add --save-dev @blazzi/eslint-config
```

With `yarn`:

```sh
yarn add --dev @blazzi/eslint-config
```

With `npm`:

```sh
npm install --save-dev @blazzi/eslint-config
```

## Usage

#### Direct Re-Export

```typescript
// eslint.config.js
export { default } from '@blazzi/eslint-config/typescript';
```

#### Define Local

```typescript
// eslint.config.js
export { defineConfig, typescriptConfig } from '@blazzi/eslint-config';

export default defineConfig(...typescriptConfig);
```

## Contributing

Your contributions are welcome! Please adhere to this commit message convention when submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

&copy; 2024 [Mehmetcan YILMAZ](https://github.com/ymehmetcan)
