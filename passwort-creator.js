const bcrypt = require('bcryptjs');

// Replace this with your desired password
const password = 'Tokelamani01';

// Generate salt and hash
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

// Base64 encode the hash to avoid special character issues
const encodedHash = Buffer.from(hash).toString('base64');

console.log('Your original password hash:');
console.log(hash);

console.log('\nEncoded for .env.local (copy this entire line):');
console.log(`ADMIN_PASSWORD_HASH=${encodedHash}`);