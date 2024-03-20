const express = require('express');
const app = express();

app.use(express.json());
const db= require('./models');

// //Routers
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

db.sequelize.sync().then(() => {;
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
});