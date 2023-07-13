const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = async (type, data) => {
  if (type === "postCreated") {
    posts[data.id] = { id: data.id, title: data.title, comments: [] };
  }
  if (type === "commentCreated") {
    posts[data.postId].comments.push({
      id: data.id,
      content: data.content,
      status: data.status,
    });
  }
  if (type === "commentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.status(201).send({});
});

app.listen(4002, async () => {
  console.log("server is running on port 4002");
  const res = await axios.get("http://localhost:4005/events");
  const data = await res.data;
  for (let event of data) {
    handleEvent(event.type, event.data);
  }
});
