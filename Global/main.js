'use strict';

// 当前正在执行的脚本所在的绝对路径及其自身
console.log(__filename);

// 当前正在执行的脚本所在的绝对路径
console.log(__dirname);

// 定时2000ms后执行一次函数
var t = setTimeout(function() {
    console.log('Hello');
}, 2000);

// 清除定时器
//clearTimeout(t);

// 间隔1000ms重复执行函数
var h = setInterval(function() {
    console.log('World');
}, 1000);

setTimeout(function() {
    // 清除间隔执行
    clearInterval(h);
}, 8000);

// 打印当前执行的代码在堆栈中的调用路径
//console.trace();

// 绑定当前进程的exit事件
process.on('exit', function(code) {
    console.log('退出码为：' + code);
});

console.log('当前目录：' + process.cwd());
console.log('当前版本：' + process.version);
