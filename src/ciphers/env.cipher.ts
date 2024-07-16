import {
  CIPHER,
  Cipher,
  CipherOptions,
  createCipher,
} from '@jihyunlab/web-crypto';
import { WebBuffer } from '@jihyunlab/web-buffer';

export class EnvCipher {
  private readonly cipher: Cipher;

  private constructor(cipher: Cipher) {
    this.cipher = cipher;
  }

  public static async create(
    cipher: CIPHER,
    secret?: string,
    options?: CipherOptions
  ) {
    if (!secret) {
      secret = process.env.JIHYUNLAB_SECRET_KEY;
    }

    if (!secret) {
      throw new Error('secret does not exist.');
    }

    return new EnvCipher(await createCipher(cipher, secret, options));
  }

  public async encrypt(text: string) {
    if (!text) {
      throw new Error('text does not exist.');
    }

    return WebBuffer.from(
      await this.cipher.encrypt(text),
      'uint8array'
    ).toString('hex');
  }

  public async decrypt(text: string) {
    if (!text) {
      throw new Error('text does not exist.');
    }

    return WebBuffer.from(
      await this.cipher.decrypt(text),
      'uint8array'
    ).toString('utf8');
  }
}
