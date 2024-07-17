import { CIPHER, CipherOptions } from '@jihyunlab/web-crypto';
import { EnvCipher } from './ciphers/env.cipher';

export const Env = {
  createCipher: async (
    cipher: CIPHER = CIPHER.AES_256_GCM,
    secret?: string,
    options?: CipherOptions
  ) => {
    return await EnvCipher.create(cipher, secret, options);
  },
};

export { CIPHER, CipherOptions, EnvCipher };
