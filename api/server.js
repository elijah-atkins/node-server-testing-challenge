const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const projectRouter = require("../projects/projectsRouter")

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up and ATOM" });
});



module.exports = server;
