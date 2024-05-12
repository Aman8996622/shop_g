
const { compareSync } = require('bcrypt');
const crypto = require('crypto');

const ENCRYPTION_KEY = "5850ffe64c8fa8e1e93a6b89f5229a75"; // Must be 256 bits (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16

function encrypt(text) {
 let iv = crypto.randomBytes(IV_LENGTH);
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
 let encrypted = cipher.update(text);

 encrypted = Buffer.concat([encrypted, cipher.final()]);``

 return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
 let textParts = text.split(':');
 let iv = Buffer.from(textParts.shift(), 'hex');
 let encryptedText = Buffer.from(textParts.join(':'), 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
 let decrypted = decipher.update(encryptedText);

 decrypted = Buffer.concat([decrypted, decipher.final()]);

 return decrypted.toString();
}






function generateRandomKey(length) {
    const keyLength = length / 2; // Since each byte will be represented by 2 characters in hex
    const temp =crypto.randomBytes(keyLength).toString('hex');
   
    console.log("given key is ", temp);
    return  temp;

}

module.exports = { decrypt, encrypt };