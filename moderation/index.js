const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "commentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    await axios
      .post("http://localhost:4005/events", {
        type: "commentModerated",
        data: {
          id: data.id,
          content: data.content,
          postId: data.postId,
          status,
        },
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("server is running on port 4003");
});
