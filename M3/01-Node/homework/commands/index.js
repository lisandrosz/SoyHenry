const fs = require("fs");
const request = require("request");
module.exports = {
  date: (done) => done(Date()),
  pwd: (done) => done(require.main.path),
  ls: (done) =>
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      done("\n");
      const result = [];
      files.forEach(function (file) {
        result.push(file.toString());
      });
      done(result.join("\n"));
    }),
  echo: (done, array) => done(array.slice(1).join(" ")),
  cat: (done, array) => {
    const path = `./${array[1]}`;
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) throw err;
      done("\n");
      done(data);
    });
  },
  head: (done, array) => {
    const path = `./${array[1]}`;
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) throw err;
      const lines = data.split("\n");
      done("\n");
      const datos = lines.slice(0, 5).join("\n");
      done(datos);
    });
  },
  tail: (done, array) => {
    const path = `./${array[1]}`;
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) throw err;
      const lines = data.split("\n");
      done("\n");
      const datos = lines.slice(-5).join("\n");
      done(datos);
    });
  },
  curl: (done, array) => {
    const url = array[1];
    request(url, (err, response, body) => {
      done(body);
    });
  },
};
