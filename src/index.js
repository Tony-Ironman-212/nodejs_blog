// import thư viện
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars"); // lấy engine

// tạo server
const app = express();
const port = 3000;

// Sử dụng morgan, HTTP logger
app.use(morgan("dev"));

// tổng hợp lại bài 9, sử dụng template engine handlebars
// 1. cài npm i express-handlebars
// 2. tạo folder theo cấp này
// ├── app.js
// └── views
//     ├── home.handlebars
//     └── layouts
//         └── main.handlebars
// 2 directories, 3 files
// 3. cấu hình bên index.js (tham khảo phần app.engine() bên dưới)
// 4. soạn code html cho main.hbs phần body là  {{{body}}}
// 5. soạn code cho home.hbs, đây sẽ là phần body bên file main.hbs
// 6. tạo thư mục chứa các bộ phận partials trong file view
// 7. các bộ phận được dùng trong file main với cú pháp {{> header }}

// sử dụng handlebars làm view engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "resources/views/layouts"),
    partialsDir: path.join(__dirname, "resources/views/partials"),
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

// routes
app.get("/", (req, res) => {
  res.render("home", { title: "Example App" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "Example App: About" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
