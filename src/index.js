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

//Cài và dùng middleware express.urlencoded() để xử lý dữ liệu từ form HTML.
app.use(express.urlencoded({ extended: true }));

// sử dụng handlebars làm view engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: path.join(__dirname, 'resources/views/partials'),
  }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes
app.get('/', (req, res) => {
  // lấy query param "name"
  const userName = req.query.name || 'Guest';
  const userHobby = req.query.hobby || 'Unknown';

  res.render('home', { title: 'Example App', userName, userHobby });
});

app.get('/about', (req, res) => {
  const userName = req.query.name;
  const userAddress = req.query.address;
  res.render('about', {
    title: 'Example App: About',
    name: userName,
    address: userAddress,
  });
});

app.get('/search', (req, res) => {
  const userName = req.query.name;
  const userAddress = req.query.address;
  res.render('search', {
    title: 'Example App: Search',
    name: userName,
    address: userAddress,
  });
});

app.post('/search', (req, res) => {
  const userName = req.body.name;
  const userAddress = req.body.address;
  res.render('search', {
    title: 'Example App: Search',
    name: userName,
    address: userAddress,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
