const server = require('./server.js');
const request = require('supertest');
const db = require("../data/dbConfig.js");

//----------------------------------------------------------------------------//
// create a section for server tests
//----------------------------------------------------------------------------//
describe('server.js', () => {

    test('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    //------------------------------------------------------------------------//
    // tests for GET / 
    // 
    // typical HTTP API things we test for:
    //
    //   * http status code (ex. 200, 401, 500, etc.)
    //   * format of the data (JSON, XML, etc.)
    //   * structure of the return data ({field: 'value', field2: 'etc' ...})
    //
    //------------------------------------------------------------------------//
    describe('GET /', () => {
        test("Environment setup", async () => {
            const response = await request(server).get("/");
            expect(process.env.DB_ENV).toBe("testing");
            expect(response.statusCode).toBe(200);
            expect(response.type).toBe("application/json");
            expect(response.body).toEqual({ api: "up" });
          });
    });
    describe("projects api routes", () => {
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
    });
});