const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(project) {
  const [id] = await db('projects').insert(project);
  return db('projects').where({ id }).first();

}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db("projects").where({ id }).delete();
}

function getAll() {
  return db('projects');
}

function findById(id) {
  return null;
}
