const server = require("./server.js");
const request = require("supertest");
const db = require("../data/dbConfig.js");

const body = {
  img: "https://elijah-atkins.github.io/img/cannameds.png",
  title: "Canna Meds",
  url: "https://starwars-info.vercel.app/",
  git: "https://github.com/elijah-atkins/starwars-api",
  description:
    "Explore information about the star wars universe from swapi.dev Built using React Query and react-router-dom",
  bullets:
    "Page tested with react testing library|Click show title to expose show selection dropdown|Explore tv favorites with episode synopsis for every season",
};
//----------------------------------------------------------------------------//
// create a section for server tests
//----------------------------------------------------------------------------//
describe("server.js", () => {
  test("should be the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

//------------------------------------------------------------------------//
// tests for GET / DELETE / POST / PUT
//
// typical HTTP API things we test for:
//
//   * http status code (ex. 200, 401, 500, etc.)
//   * format of the data (JSON, XML, etc.)
//   * structure of the return data ({field: 'value', field2: 'etc' ...})
//
//------------------------------------------------------------------------//
describe("GET root", () => {
  test("Environment setup", async () => {
    const response = await request(server).get("/");
    expect(process.env.DB_ENV).toBe("testing");
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toEqual({ api: "up" });
  });
});
describe("GET / DELETE / POST / PUT", () => {
  beforeEach(async () => {
    // re-runs the seeds and starts with fresh database of our seeds
    await db.seed.run();
  });
  it("GET /projects array", async () => {
    const response = await request(server).get("/projects");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(12);
    expect(response.type).toBe("application/json");
  });
  it("GET /projects/1 returns first object with id of 1", async () => {
    const response = await request(server).get("/projects/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
    expect(response.body.title).toBe("React Query Star Wars API");
    expect(response.type).toBe("application/json");
  });
  it("DELETE object with id of 1", async () => {
    const response = await request(server).delete("/projects/1");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("DELETED");
    expect(response.type).toBe("application/json");
  });
  it("POST new object", async () => {
    const response = await request(server)
      .post("/projects")
      .send({ ...body });
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.title).toBe("Canna Meds");
  });
});
