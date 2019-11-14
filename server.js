const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const routerControl = require('./controllers/routerController');
const db = require('./db/mongoose');
// const Category = require('./model/category');


// Category.create([
//   {parentId: '5dcac0f714951334a4df339f', name: '小米'},
//   {parentId: '5dcac0f714951334a4df339f', name: 'iphone'},
//   {parentId: '5dcac0f714951334a4df339f', name: '华为'},
//   {parentId: '5dcac0f714951334a4df339f', name: '三星'},
//   {parentId: '5dcac0f714951334a4df339f', name: 'oppo'},
//   {parentId: '5dcac0f714951334a4df339f', name: 'vivo'}
// ], function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// })

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/json' }))

routerControl(app);

app.listen(9000, (err) => {
  if(err) throw new Error()
  console.log(
    chalk.green('server is start at port 9000')
  )
})