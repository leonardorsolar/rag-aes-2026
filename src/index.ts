import express from "express";
import { config } from "./config.js";

const app = express();

app.get("/", (_req, res) => {
  res.send("RAG is running");
});

app.listen(config.port, () => {
  console.log(`🚀 Server running at http://localhost:${config.port}`);
});
