const mongoose = require('mongoose') // 引入 mongoose
const chalk = require('chalk');
const url = "mongodb://localhost:27017/react_manager"; // 本地数据库地址
mongoose.connect(url)

// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
const db = mongoose.connection; 
db.on('error', (err) => {
  console.error(
    chalk.red('Error in mongodb connection:' + err)
  )
});
db.once('open', function() {
  console.log(
    chalk.green("Successful connection to "+url)
  )
});
db.on('close', function() {
  console.log(
    chalk.red('数据库断开，重新连接数据库')
  );
  mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

module.exports = db;
