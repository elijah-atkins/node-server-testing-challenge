const router = require("express").Router();

const Projects = require("../projects/projectsModel");

router.get("/", (req, res) => {
    Projects.getProjects()
      .then((projects) => {
        res.status(200).json(projects);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });
  
  router.get("/:id", (req, res) => {
    Projects.getProjects(req.params.id)
      .then((projects) => {
        res.status(200).json(projects);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      await Projects.remove(req.params.id);
      res
        .status(200)
        .json({ message: `${req.params.id} DELETED`, Projects: req.Projects });
    } catch (error) {
      next(error);
    }
  });
  
  router.post("/", validateProjectsBody, async (req, res, next) => {
    try {
      const newProjects = await Projects.insert(req.body);
      res.json(newProjects);
    } catch (error) {
      next(error);
    }
  });
  
  router.put("/:id", validateProjectsBody, async (req, res, next) => {
    try {
      const newProjects = await Projects.update(req.params.id, req.body);
      res.json(newProjects);
    } catch (error) {
      next(error);
    }
  });
  
  function validateProjectsBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "Please provide a Projects body" });
      //look for required fields
    } else if (!req.body.title) {
      res.status(400).json({ error: "Please provide a unique project title" });
    } else {
      next();
    }
  }

  module.exports = router;