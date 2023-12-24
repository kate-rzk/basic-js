const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    this.validateArguments(message, key);

    const normalizedMessage = message.toUpperCase();
    const normalizedKey = this.generateKey(key, normalizedMessage.length);

    let result = "";

    for (let i = 0, j = 0; i < normalizedMessage.length; i++) {
      if (/^[A-Z]$/.test(normalizedMessage[i])) {
        const messageCharCode = normalizedMessage.charCodeAt(i) - 65;
        const keyCharCode = normalizedKey.charCodeAt(j) - 65;
        const encryptedCharCode = ((messageCharCode + keyCharCode) % 26) + 65;
        result += String.fromCharCode(encryptedCharCode);
        j = (j + 1) % normalizedKey.length;
      } else {
        result += normalizedMessage[i];
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    this.validateArguments(encryptedMessage, key);

    const normalizedEncryptedMessage = encryptedMessage.toUpperCase();
    const normalizedKey = this.generateKey(
      key,
      normalizedEncryptedMessage.length
    );

    let result = "";

    for (let i = 0, j = 0; i < normalizedEncryptedMessage.length; i++) {
      if (/^[A-Z]$/.test(normalizedEncryptedMessage[i])) {
        const encryptedCharCode = normalizedEncryptedMessage.charCodeAt(i) - 65;
        const keyCharCode = normalizedKey.charCodeAt(j) - 65;
        const decryptedCharCode =
          ((encryptedCharCode - keyCharCode + 26) % 26) + 65;
        result += String.fromCharCode(decryptedCharCode);
        j = (j + 1) % normalizedKey.length;
      } else {
        result += normalizedEncryptedMessage[i];
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  validateArguments(arg1, arg2) {
    if (!arg1 || !arg2) {
      throw new Error("Incorrect arguments!");
    }
  }

  generateKey(key, length) {
    const normalizedKey = key.toUpperCase();
    let result = "";

    for (let i = 0; i < length; i++) {
      if (/^[A-Z]$/.test(normalizedKey[i % normalizedKey.length])) {
        result += normalizedKey[i % normalizedKey.length];
      } else {
        result += normalizedKey[i % normalizedKey.length];
        length++;
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
