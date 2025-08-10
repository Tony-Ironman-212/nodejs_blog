// import thư viện
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars'); // lấy engine
const sass = require('sass');

// tạo server
const app = express();
const port = 3000;

// Sử dụng morgan, HTTP logger
app.use(morgan('dev'));

// Cho phép truy cập file tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// sử dụng handlebars làm view engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: path.join(__dirname, 'resources/views/partials'),
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Example App' });
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'Example App: About' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
