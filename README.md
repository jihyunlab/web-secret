# @jihyunlab/web-secret

[![Version](https://img.shields.io/npm/v/@jihyunlab/web-secret.svg?style=flat-square)](https://www.npmjs.com/package/@jihyunlab/web-secret?activeTab=versions) [![Downloads](https://img.shields.io/npm/dt/@jihyunlab/web-secret.svg?style=flat-square)](https://www.npmjs.com/org/jihyunlab) [![Last commit](https://img.shields.io/github/last-commit/jihyunlab/web-secret.svg?style=flat-square)](https://github.com/jihyunlab/web-secret/graphs/commit-activity) [![License](https://img.shields.io/github/license/jihyunlab/web-secret.svg?style=flat-square)](https://github.com/jihyunlab/web-secret/blob/master/LICENSE) [![Linter](https://img.shields.io/badge/linter-eslint-blue?style=flat-square)](https://eslint.org) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)\
[![Build](https://github.com/jihyunlab/web-secret/actions/workflows/build.yml/badge.svg)](https://github.com/jihyunlab/web-secret/actions/workflows/build.yml) [![Lint](https://github.com/jihyunlab/web-secret/actions/workflows/lint.yml/badge.svg)](https://github.com/jihyunlab/web-secret/actions/workflows/lint.yml) [![codecov](https://codecov.io/gh/jihyunlab/web-secret/graph/badge.svg?token=K2536J64LQ)](https://codecov.io/gh/jihyunlab/web-secret)

@jihyunlab/web-secret provides functionality in web applications to decrypt .env files encrypted with [@jihyunlab/secret-cli](https://www.npmjs.com/package/@jihyunlab/secret-cli).

The encryption function is implemented with [@jihyunlab/web-crypto](https://www.npmjs.com/package/@jihyunlab/web-crypto) and provides encryption for AES 256 GCM.

## Installation

```bash
npm i @jihyunlab/web-secret
```

## Encryption key

In web applications, since it's not possible to retrieve system or user environment variables, it's recommended to manage and input encryption keys separately.

In cases where the JIHYUNLAB_SECRET_KEY environment variable cannot be retrieved, you must input the encryption key directly for decryption.

## Usage

Decrypt using the separately managed encryption key that you input directly.

```
import { CIPHER, Env } from '@jihyunlab/web-secret';

const cipher = await Env.createCipher(CIPHER.AES_256_GCM, 'YourSecretKey');
const value = await cipher.decrypt(process.env.ENV_KEY);
```

## Credits

Authored and maintained by JihyunLab <<info@jihyunlab.com>>

## License

Open source [licensed as MIT](https://github.com/jihyunlab/web-secret/blob/master/LICENSE).
