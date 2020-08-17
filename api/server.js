const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const projectRouter = require("../projects/projectsRouter")
const usersRouter = require('../users/usersRouter')
const authRouter = require('../auth/authRouter')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/", authRouter);
server.use("/api/projects", projectRouter);
server.use("/api/users", usersRouter);


server.get("/", (req, res) => {
  res.status(200).json({ api: "up and ATOM" });
});



module.exports = server;
