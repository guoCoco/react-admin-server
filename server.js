const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const routerControl = require('./controllers/routerController');
const db = require('./db/mongoose');


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