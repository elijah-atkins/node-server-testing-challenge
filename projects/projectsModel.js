const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getProjects,
};

function projectToBody(project) {
  const result = {
    ...project,
  };
  return result;
}

async function insert(project) {
  const [id] = await db("projects").insert(project);
  return db("projects").where({ id }).first();
}

function remove(id) {
  return db("projects").where({ id }).delete();
}

function getProjects(id) {
  let query = db("projects");

  if (id) {
    return query
      .where("id", id)
      .first()
      .then((project) => {
        if (project) {
          return projectToBody(project);
        } else {
          return null;
        }
      });
  } else {
    return query.then((projects) => {
      return projects.map((project) => projectToBody(project));
    });
  }
}

async function update(id, changes) {
  const project = await db("projects").where("id", id).update(changes)
  return db("projects").where({ id }).first();
}
