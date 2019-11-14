## 基于express mongoose的node后台项目

### 技术栈

- express框架  提供http服务
- mongoose 用来连接mongodb数据库

### 项目目录

    | db           连接数据库
    | model        数据库model
    | controllers  处理请求
    | server.js    后台服务入口
      
### mongodb

  - 使用的本地的mongodb数据库，Robo 3T可视化工具

### mongose 

主要有Schema Model document相关概念  
- Model 对应的就是 mongodb集合， Model实例有 增删改查  如下 Category是 Model的一个实例
- 查询数据 Category.find(condition, callback)
- 更新数据 Category.findOneAndUpdate(codition, updateDATA, callback)
- 添加数据 Category.create(data, callback)  data 为 json 对象或数组
