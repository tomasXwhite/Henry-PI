BASE DE DATOS


Para traerme todas las recetas `https://api.spoonacular.com/recipes/complexSearch?{apiKey}`
Para poner un limite a las recetas traidas `https://api.spoonacular.com/recipes/complexSearch?number={number}&{apiKey}` number seria el limite, el json en el buscador solo me muestra hasta 100, con el endpoint `&addRecipeInformation=true` me da toda la info


Con `https://api.spoonacular.com/recipes/{id}/information?{apiKey}` recivo la informacion de la receta (pasandole su id), dentro de todo el json q me devuelve, tengo la propiedad diets (es un arreglo) 

Para acceder al healthscore, directamente lo accedo como una propiedad del json que me llega.

Tambien puedo acceder directamente de ahi al summary, el problema es que me llega un string que tiene elementos html. 

Tambien tengo la propiedad instructions, la cual es un string de html, que tiene las instrucciones.
Pero como alternativa, tengo la propiedad analyzedInstructions, que en su posicion 0, tiene la propiedad steps, y dentro de esta, tengo cada uno de los pasos, puedo acceder como arreglo, a cada uno. Y para acceder a la instruccion de cada paso (que es un string), tengo q poner .step ,ya q es una propiedad de steps.
    




RUTA POST DE CREACION DE RECETAS,

En el frontend en esta ruta habra un formulario controlado, donde se podrá poner el name, summary, health, steps, de la receta, y ADICIONALMENTE sus tipos de dieta, los cuales pueden ser varios. 


Cuando creo un Recipe o diet, para verlo bien, tengo q pasarlo a JSON

Todo lo que sea de sequelize son promesas, tengo q esperar a que sucedanm,

El metodo .save() se ejecuta cuando un campo se haya modificado





En el front, tengo un formulario controlado que hace un post a /recipes, mandandole por body, todos los datos para crear la receta
Y los tipos de dieta que quiere que se le asocien, o sea en el formulario le doy las opciones de los tipos de dieta a los que se los puede asociar.
Entonces en la ruta post/recipes, anteriormente los tipos de dieta tienen que estar cargados, (Eso lo deberia hacer en una primera instancia, para q cuando se arranque el servidor se traigan los tipos de dieta y queden ahi.)



DUDAS: 


index primer get, en la parte que tengo q traerme todas las recipes de la api y de LA BASE D DATOS q coincidan con el nombre x query,


Al post de recipes tengo q asociarle la dieta seleccionada.