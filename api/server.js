const express = require("express");
const Projects = require('../projects/projectsModel');
const server = express();


server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/projects", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/projects/:id", (req, res) => {
  Projects.getProjects(req.params.id)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.delete("/projects/:id", async (req, res, next) => {
  try {
    await Projects.remove(req.params.id);
    res.json({ message: "DELETED", Projects: req.Projects });
    res.json();
  } catch (error) {
    next(error);
  }
});

module.exports = server;
