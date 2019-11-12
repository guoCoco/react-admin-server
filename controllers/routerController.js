const Category = require('../model/category');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('hello world')
  })
  
  app.post('/api/login', (req, res) => {
    // console.log(req.query)
    res.send({ code: '0', msg: 'ok' })
  })

  app.get('/api/category/list', (req, res) => {
    const { parentId } = req.query
    Category.find({ parentId: parentId }, function (err, docs) {
      if (err) throw err;
      res.json({
        code: '0',
        msg: 'ok',
        data: docs
      });
    });
  })
}