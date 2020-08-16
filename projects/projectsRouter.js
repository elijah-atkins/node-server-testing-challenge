const express = require('express');

const Bullets = require('./bullets-model.js');
const Projects = require('../projects/projects-model.js');

const router = express.Router();

// this only runs if the url has /api/bullets in it
router.get('/', (req, res) => {
  Bullets.find(req.query)
  .then(bullets => {
    res.status(200).json(bullets);
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      project: 'Error retrieving the bullets',
    });
  });
});

// /api/bullets/:id

router.get('/:id', (req, res) => {
  Bullets.findById(req.params.id)
  .then(bullet => {
    if (bullet) {
      res.status(200).json(bullet);
    } else {
      res.status(404).json({ project: 'Bullet not found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      project: 'Error retrieving the bullet',
    });
  });
});

router.post('/', (req, res) => {
  Bullets.add(req.body)
  .then(bullet => {
    res.status(201).json(bullet);
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      project: 'Error adding the bullet',
    });
  });
});

router.delete('/:id', (req, res) => {
  Bullets.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ project: 'The bullet has been nuked' });
    } else {
      res.status(404).json({ project: 'The bullet could not be found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      project: 'Error removing the bullet',
    });
  });
});

router.put('/:id', (req, res) => {
  Bullets.update(req.params.id, req.body)
  .then(bullet => {
    if (bullet) {
      res.status(200).json(bullet);
    } else {
      res.status(404).json({ project: 'The bullet could not be found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      project: 'Error updating the bullet',
    });
  });
});

// add an endpoint that returns all the projects for a bullet
// this is a sub-route or sub-resource
router.get('/:id/projects', (req, res) => {
  Bullets.findBulletProjects(req.params.id)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch (error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      project: 'Error getting the projects for the bullet',
    });
  });
});

// add an endpoint for adding new project to a bullet
router.post('/:id/projects', (req, res) => {
  const projectInfo = { ...req.body, bullet_id: req.params.id };

  Projects.add(projectInfo)
  .then(project => {
    res.status(210).json(project);
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      project: 'Error getting the projects for the bullet',
    });
  });
});

module.exports = router;