const { server } = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);

describe('the server', () => {
    it('responds correcly on GET request to /authors', () => {
        return mockRequest
            .get('/authors')
            .then(results => {
                expect(results.status).toBe(200);
            })
            .catch(console.error)
    })
})