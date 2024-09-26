import express from "express";

const app = express();

const PORT = process.env.PORT || 6000;
app.get("/", (req, res) => {
  res.send("server is ready");
});
app.listen(5000, () => {
  console.log("Server is running on 5000");
});
