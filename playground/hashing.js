const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log('#', salt);
//     })
// })

const hashedPassword = '$2a$10$VJBtcrhDR17/9Kxf6ZXGYe';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log('###', res);
})

// const data = {
//     id: 10
// }
//
// const token = jwt.sign(data, '123abc');
// console.log('token', token);
//
// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// let message = 'I am user 13';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// const data = {
//     id: 4
// };
//
// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'secret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
//
// if (resultHash === token.hash) {
//     console.log(`+ : ${resultHash}`);
// } else {
//     console.log(`- : NO`);
// }
