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
    console.log(parentId)
    Category.find({ parentId: parentId }, function (err, docs) {
      if (err) throw err;
      res.json({
        code: '0',
        msg: 'ok',
        data: docs
      });
    });
  })

  // 更新分类
  app.get('/api/category/update', (req, res) => {
    const { categoryId, categoryName } = req.query
    console.log(categoryId, categoryName)
    Category.findOneAndUpdate({ _id: categoryId }, { name: categoryName}, function (err, docs) {
      if (err) throw err;
      console.log('更新成功');
      res.json({
        code: '0',
        msg: 'ok'
      });
    });
  })

}