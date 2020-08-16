const db = require("../data/dbConfig.js");
const request = require("supertest");
const server = require("../api/server");
const Projects = require("./projectsModel.js");

const shape = {
  title: "Hello World",
  description: "Test data that is just taking up space",
  bullets: "hello",
  url: "wha",
  git: "hey hey",
};

describe("projects model", () => {
  beforeEach(async () => {
    // re-runs the seeds and starts with fresh database of our seeds
    await db.seed.run();
  });

  describe("insert()", () => {
    it("should insert the provided projects into the DB", async () => {
      await Projects.insert({ ...shape, title: "gaffer", img: "what" });
      await Projects.insert({ ...shape, title: "sam", img: "sux" });

      const projects = await db("projects");
      expect(projects).toHaveLength(14);
    });

    it("should return what was inserted", async () => {
      let project = await Projects.insert({
        ...shape,
        title: "gaffer",
        img: "testing",
      });
      expect(project.title).toBe("gaffer");
      expect(project.img).toBe("testing");

      project = await Projects.insert({
        ...shape,
        title: "sam",
        img: "unique",
      });
      expect(project.title).toBe("sam");
      expect(project.img).toBe("unique");
    });
  });
  describe("remove()", () => {
    it("should add projects to delete and then delete projects", async () => {

      await Projects.remove(1);
      await Projects.remove(2);
      const removedProjects = await db("projects");
      expect(removedProjects).toHaveLength(10);
    });
  });
});
