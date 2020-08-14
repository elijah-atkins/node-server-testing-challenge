const server = require('./server.js');
const request = require('supertest');

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
        //--------------------------------------------------------------------//
        // test for status code

        it('should return 200 OK', async () => {
            const res = await request(server).get('/');

            expect(res.status).toBe(200);
        });

        // does it return the right data type?
        //--------------------------------------------------------------------//

        it('should be json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        })

        // does it return the right data?

        it('should return the right object', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: 'up' });
        })
    });
});