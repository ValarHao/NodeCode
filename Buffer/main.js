'use strict';

var buf = new Buffer(18);

// 写入Buffer
console.log('写入字节数：' + buf.write('https://github.com'));

// 读取Buffer
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 10));

// 将Buffer转换为JSON对象
console.log(buf.toJSON());

// 合并Buffer
var buf1 = new Buffer('github网址：');
console.log(Buffer.concat([buf1, buf]).toString());

// 拷贝Buffer
buf.copy(buf1);
console.log('buf1 content: ' + buf1.toString());

// 裁剪Buffer
console.log(buf1.slice(0, 6).toString());

// Buffer长度
console.log(buf.length);
