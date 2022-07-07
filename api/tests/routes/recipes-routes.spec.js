const request = require('supertest');
const app = require('../../src/routes/index');
const { conn, Recipe, Diet } = require('../../src/db');
// const session = require('supertest-session');


describe('Recipe Routes', () => {
    beforeAll(async () => {
      await conn.sync({ force: true });
    })

    describe('Parte UNO: POST /recipes', () => {
        it('should return status 404 and corresponding text if any of the mandatory parameters is not send', async (done) => {
          const res = await request(app).post('/recipes')
          expect(res.statusCode).toBe(404);
          expect(res.text).toBe('Falta enviar datos obligatorios');

        });
    })

    afterAll(async () => {
        await conn.close();
      })


})






























// /* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { Recipe, conn } = require('../../src/db.js');

// // const agent = session(app);
// const recipe = {
//   name: 'Milanea a la napolitana',
// };

// describe('Recipe routes', () => {
//   beforeAll(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Recipe.sync({ force: true })
//     .then(() => Recipe.create(recipe)));
//   describe('GET /recipes', () => {
//     it('should get 200', () =>
//       app.get('/recipes').expect(200)
//     );
//   });




// });
