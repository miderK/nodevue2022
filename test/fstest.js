const fs = require('fs');
const util = require('util');

/*
fs.readFile('test.json', 'utf-8', (err, data) => {
    if (err) return console.error(err);
    util.log("data>>", data);
});  // 비동기
*/
util.log("------------------------");

const msgfile = __dirname + '/message.txt';
fs.writeFileSync(msgfile, 'Hello Node.js', (err => {
    if(err) throw err;
    console.log('The file has been saved!');
}));

let data2 = fs.readFileSync(msgfile, 'utf-8');
util.log("data2>>", data2);

util.log("===================================");