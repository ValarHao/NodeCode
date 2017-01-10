'use strict';

var fs = require('fs');

// 异步写入
fs.writeFile('output.txt', 'I am output.txt!', function(err) {
    if (err) {
        return console.error(err);
    }
});

// 同步写入
fs.writeFileSync('output.txt', 'I am output.txt sync!');
