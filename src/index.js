// import thư viện
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars'); // lấy engine
const methodOverride = require('method-override'); // để sử dụng phương thức PUT, DELETE trong form

// local import
const route = require('./routes'); // import route
const db = require('./config/db'); // import db

// connect to DB
db.connect();

// tạo server
const app = express();
const port = 3000;

// Sử dụng morgan, HTTP logger
// app.use(morgan('dev'));

// Cho phép truy cập file tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

//Cài và dùng middleware express.urlencoded() để xử lý dữ liệu từ form HTML.
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // để xử lý dữ liệu JSON

// sử dụng handlebars làm view engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: path.join(__dirname, 'resources/views/partials'),
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// dùng route làm gọn các đường dẫn địa chỉ truy cập
route(app);

// lắng nghe server ở port 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
