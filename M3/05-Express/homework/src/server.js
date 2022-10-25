// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];
let id = 1;

const server = express();

server.use(express.json());

server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;

  if (author && title && contents) {
    let obj = {
      author,
      title,
      contents,
      id,
    };
    posts.push(obj);
    id++;
    res.status(200).json(obj);
  } else {
    const obj = {
      error: "No se recibieron los parámetros necesarios para crear el Post",
    };
    res.status(STATUS_USER_ERROR).json(obj);
  }
});

server.post("/posts/author/:author", (req, res) => {
  const author = req.params.author;
  const { title, contents } = req.body;
  if (author && title && contents) {
    let obj = {
      author,
      title,
      contents,
      id,
    };
    posts.push(obj);
    id++;
    res.status(200).json(obj);
  } else {
    const obj = {
      error: "No se recibieron los parámetros necesarios para crear el Post",
    };
    res.status(STATUS_USER_ERROR).json(obj);
  }
});

server.get("/posts", (req, res) => {
  const term = req.query.term;
  if (term) {
    let obj = posts.filter((post) => {
      const titulo = post.title;
      const cont = post.contents;
      return titulo.includes(term) || cont.includes(term);
    });
    res.status(200).json(obj);
  } else {
    res.json(posts);
  }
});

server.get("/posts/:author", (req, res) => {
  const author = req.params.author;
  const obj = posts.filter((post) => post.author === author);
  if (obj.length > 0) {
    res.json(obj);
  } else {
    const err = { error: "No existe ningun post del autor indicado" };
    res.status(STATUS_USER_ERROR).json(err);
  }
});

server.get("/posts/:author/:title", (req, res) => {
  const author = req.params.author;
  const title = req.params.title;
  const obj = posts.filter(
    (post) => post.author === author && post.title === title
  );
  if (obj.length > 0) {
    res.json(obj);
  } else {
    const err = {
      error: "No existe ningun post con dicho titulo y autor indicado",
    };
    res.status(STATUS_USER_ERROR).json(err);
  }
});

server.put("/posts", (req, res) => {
  const { id, title, contents } = req.body;
  if (id && title && contents) {
    posts.forEach((post) => {
      if (post.id === id) {
        post.title = title;
        post.contents = contents;
        return res.json(post);
      }
    });
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se encontro el id" });
  } else {
    const error = {
      error:
        "No se recibieron los parámetros necesarios para modificar el Post",
    };
    res.status(STATUS_USER_ERROR).json(error);
  }
});

server.delete("/posts", (req, res) => {
  const error = { error: "Mensaje de error" };
  const { id } = req.body;
  if (id) {
    posts.forEach((post) => {
      if (post.id === id) {
        posts = posts.filter((post) => post.id !== id);
        return res.json({ success: true });
      }
    });
    return res.status(STATUS_USER_ERROR).json(error);
  } else {
    return res.status(STATUS_USER_ERROR).json(error);
  }
});

server.delete("/author", (req, res) => {
  const error = { error: "No existe el autor indicado" };
  const { author } = req.body;
  if (author) {
    posts.forEach((post) => {
      if (post.author === author) {
        let eliminados = posts.filter((post) => post.author === author);
        posts = posts.filter((post) => post.author !== author);

        return res.json(eliminados);
      }
    });
    return res.status(STATUS_USER_ERROR).json(error);
  } else {
    return res.status(STATUS_USER_ERROR).json(error);
  }
});

module.exports = { posts, server };
