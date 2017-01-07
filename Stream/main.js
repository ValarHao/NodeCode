'use strict';

var fs = require('fs');
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码为utf8
readerStream.setEncoding('UTF8');

// 处理事件流 -> data end error
readerStream.on('data', function(chunk) {   // data: 当有数据可读时触发
    data += chunk;
});

readerStream.on('end', function() {   // end: 当没有更多的数据可读时触发
    console.log(data);
});

readerStream.on('error', function(err) {   // error: 当读取过程中发生错误时触发
    console.log(err.stack);
});


data = 'output';

// 创建写入流
var writerStream = fs.createWriteStream('output.txt');
// 设置编码为utf8
writerStream.write(data, 'UTF8');
// 标记文件末尾
writerStream.end();

//处理事件流 -> finish error
writerStream.on('finish', function() {   // finish: 当所有数据已被写入时触发
    console.log('写入完成');
});

writerStream.on('error', function(err) {   // error: 当写入过程中发生错误时触发
    console.log(err.stack);
});
