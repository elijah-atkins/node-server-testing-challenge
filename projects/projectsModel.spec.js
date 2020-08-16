const db = require("../data/dbConfig.js");
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
  describe("update()", () => {
    it("should update the provided change into the DB", async () => {
      await Projects.update(1, { title: "Hello World", img: "234" });
      await Projects.update(2, { title: "Jack Skelington", img: "123" });

      const projects = await db("projects");
      expect(projects).toHaveLength(12);
      expect(projects[0].title).toBe("Hello World");
      expect(projects[1].title).toBe("Jack Skelington");
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
  describe("getProjects()", () => {
    it("should get an array of projects if nothing is passed into getProjects()", async () => {
      const allProjects = await Projects.getProjects();
      expect(allProjects).toHaveLength(12);
    });
    it("should get a single project if project id is passed to getProjects()", async () => {
      const aProject = await Projects.getProjects(1);
      expect(aProject.id).toBe(1);
      expect(aProject.title).toBe("React Query Star Wars API");
    });
  });
});
