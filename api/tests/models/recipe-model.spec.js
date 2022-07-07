const { Recipe, Diet, conn } = require('../../src/db.js');
//script test: de package.json de api ---> "test": "mocha -w ./tests/**/*.spec.js" cambiado por jest "jest --verbose --detectOpenHandles". para usar jest en vez de mocha



//JEST: 

describe('Models tests', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });


  describe('Recipe model', () => {
  it('should create the Recipe if all required properties are ok', async () => {
    const newRecipe = await Recipe.create({
      title: 'receta de prueba',
      summary: "comida muy buena la verdad",
      healthScore: 99,

    });
    expect(newRecipe.toJSON()).toHaveProperty('title','receta de prueba');
    expect(newRecipe.toJSON()).toHaveProperty('healthScore',99);
    expect(newRecipe.toJSON()).toHaveProperty('instructions',null);
  });

  it('should not create the Recipe if summary is not send', async () => {
    expect.assertions(1);
    try {
      await Recipe.create({title: 'Red cake'});
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it('should not create two Recipes with the same title combination', async () => {
    expect.assertions(3);        //3 pq tengo 3 expects, le pongo los assertions para ver q ejecute todo bien pq es asincronico
    try {
      const recipeOne = await Recipe.create({ title: 'receta de prueba 1',
      summary: "comida muy buena la verdad",});
      expect(recipeOne.toJSON()).toHaveProperty('title','receta de prueba 1');

      const RecipeTwo = await Recipe.create({title: 'receta de prueba 2',
      summary: "comida muy buena la verdad"});
      expect(RecipeTwo.toJSON()).toHaveProperty('title','receta de prueba 2');
      
      await Recipe.create({title: 'receta de prueba 1', summary: "comida muy buena la verdad"});
    } catch (error) {
      expect(error.message).toBeDefined()
    }
  });

  it('should not create the Recipe if healthScore is lower than the min value', async () => {
    expect.assertions(1);
    try {
      await Recipe.create({title: 'red homemade', healthScore: -10});
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });
  it('should not create the Recipe if healthScore is higher than the max value', async () => {
    expect.assertions(1);
    try {
      await Recipe.create({title: 'yellow homemade', healthScore: 102});
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });
})


describe("Diet model", () => {



    it('should not create two Diets with the same name', async () => {
        expect.assertions(3);        //3 pq tengo 3 expects, le pongo los assertions para ver q ejecute todo bien pq es asincronico
        try {
          const dietOne = await Diet.create({ name: 'ovolact vegetarian'});
          expect(dietOne.toJSON()).toHaveProperty('name','ovolact vegetarian');
    
          const dietTwo = await Diet.create({name: 'diet of primate'});
          expect(dietTwo.toJSON()).toHaveProperty('title','diet of primate');
          
          await Diet.create({name: 'ovolact vegetarian'});
        } catch (error) {
          expect(error.message).toBeDefined()
        }
      });

      it('should not create the Diet if name is not a string', async () => {
        expect.assertions(1);
        try {
          await Recipe.create({name: 1234});
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
})




  afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  })



























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


});








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
