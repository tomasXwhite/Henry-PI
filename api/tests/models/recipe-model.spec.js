const { Recipe, conn } = require('../../src/db.js');
//script test: de package.json de api ---> "test": "mocha -w ./tests/**/*.spec.js" cambiado por jest "jest --verbose --detectOpenHandles". para usar jest en vez de mocha



//JEST: 

// describe('Ability Model', () => {
//   beforeAll(async () => {
//     await conn.sync({ force: true });
//   });

//   describe('Parte UNO', () => {
//     it('should not create the Ability if name is not send', async () => {
//       expect.assertions(1);
//       try {
//         await Recipe.create({name: "plato rico"});
//       } catch (error) {
//         expect(error.message).toBeDefined();
//       }
//     });
  
//     it('should not create the Ability if mana_cost is not send', async () => {
//       expect.assertions(1);
//       try {
//         await Recipe.create({name: 'Fire Ball'});
//       } catch (error) {
//         expect(error.message).toBeDefined();
//       }
//     });
//   })


// });








// describe('Recipe model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Recipe.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Recipe.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Recipe.create({ name: 'Milanesa a la napolitana' });
//       });
//     });



//     describe('summary', () => {
//       it('should throw an error if summary is null', (done) => {
//         Recipe.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//     })
    

    
//   });
// });
