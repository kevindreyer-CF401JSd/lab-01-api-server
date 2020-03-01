const { server } = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);

describe('the server', () => {
    it('responds on GET request to /authors', () => {
        return mockRequest
            .get('/authors')
            .then(results => {
                expect(results.status).toBe(200);
            })
    })

    it('adds item on POST to /authors', () => {
        const newAuthor = { name: 'new POST author'};
        return mockRequest
            .post('/authors')
            .send(newAuthor)
            .then(results => {
                expect(results.status).toBe(201);
                expect(results.body.name).toEqual('new POST author');
            })
    })
    it('updates item with PUT to /authors', () => {
        const newAuthor = { name: 'new PUT author'};
        return mockRequest
            .put('/authors')
            .send(newAuthor)
            .then(results => {
                expect(results.status).toBe(201);
                expect(results.body.name).toEqual('new PUT author');
            })
    })
})
