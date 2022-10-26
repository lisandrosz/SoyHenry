// const bodyParser = require("body-parser");
const express = require("express");
const postsRouter = require("./routers/postsRouter");
const authorRouter = require("./routers/authorRouter");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];
let id = 1;

const server = express();

server.use(express.json());

server.use("/posts", postsRouter);

server.use("/author", authorRouter);

module.exports = { posts, server, id };
