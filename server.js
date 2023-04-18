const express = require('express');
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(logger);

app.get("/", (req, res) => {
  res.render('index', { text: 'World'});
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
};

app.listen(3000);