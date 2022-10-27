const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json

const sumArray = (array, num) => {
  for (const numero1 of array) {
    for (const numero2 of array) {
      if (numero1 === numero2) break;
      if (numero1 + numero2 === num) return true;
    }
  }
  return false;
};

app.get("/", (req, res) => {
  res.send({
    message: "hola",
  });
});

app.get("/test", (req, res) => {
  res.send({
    message: "test",
  });
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({
    result: result,
  });
});

app.post("/product", (req, res) => {
  res.send({
    result: req.body.a * req.body.b,
  });
});

app.post("/sumArray", (req, res) => {
  const { array, num } = req.body;
  const result = sumArray(array, num);
  res.send({ result });
});

app.post("/numString", (req, res) => {
  const { string } = req.body;
  if (typeof string === "number" || string.length === 0) {
    res.sendStatus(400);
  } else {
    const result = string.length;
    res.send({ res: result });
  }
});

app.post("/pluck", (req, res) => {
  const { arreglo, propiedad } = req.body;
  if (typeof arreglo !== "object" || propiedad.length === 0) {
    res.sendStatus(400);
  }
  let responseArray = [];
  for (const obj of arreglo) {
    responseArray.push(obj[propiedad]);
  }
  res.send({ result: responseArray });
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
