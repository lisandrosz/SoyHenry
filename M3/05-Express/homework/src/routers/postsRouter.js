const express = require("express");
let { posts, id } = require("../server.js");

const postsRouter = express.Router();

postsRouter.post("/", (req, res) => {
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

postsRouter.post("/author/:author", (req, res) => {
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

postsRouter.get("/", (req, res) => {
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

postsRouter.get("/:author", (req, res) => {
  const author = req.params.author;
  const obj = posts.filter((post) => post.author === author);
  if (obj.length > 0) {
    res.json(obj);
  } else {
    const err = { error: "No existe ningun post del autor indicado" };
    res.status(STATUS_USER_ERROR).json(err);
  }
});

postsRouter.get("/:author/:title", (req, res) => {
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

postsRouter.put("/", (req, res) => {
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

postsRouter.delete("/", (req, res) => {
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

module.exports = postsRouter;
