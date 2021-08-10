const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("/home.html", { root: __dirname });
});

app.get("/users/:id", (req, res) => {
  res.sendFile("/user.html", { root: __dirname });
});

app.get("/users/", (req, res) => {
  res.sendFile("/users.html", { root: __dirname });
});

app.get("/login/", (req, res) => {
  res.sendFile("/login.html", { root: __dirname });
});
app.get("/movie/", (req, res) => {
  res.sendFile("/movie.html", { root: __dirname });
});

app.get("/movies/", (req, res) => {
  res.sendFile("/movies.html", { root: __dirname });
});
app.get("/register/", (req, res) => {
  res.sendFile("/register.html", { root: __dirname });
});
app.get("/addmovie/", (req, res) => {
  res.sendFile("/addmovie.html", { root: __dirname });
});
app.get("/addgenre/", (req, res) => {
  res.sendFile("/addgenre.html", { root: __dirname });
});

app.get("/image/:filename", (req, res) => {
  var image_filename = req.params.filename;
  res.sendFile(`/image/${image_filename}`, { root: __dirname });
});
const PORT = process.env.PORT||3001;
app.listen(PORT, () => {
  console.log(`Client server has started listening on port ${PORT}`);
});
