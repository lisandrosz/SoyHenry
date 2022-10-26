const express = require("express");
let { posts, id } = require("../server.js");

const authorRouter = express.Router();

authorRouter.delete("/", (req, res) => {
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

module.exports = authorRouter;
