//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



const server = require('./src/app.js');
const { conn, Recipe, Diet } = require('./src/db.js');
const PORT = 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {

//aca lo que hago es precargar Diets con las dietas que me dice que le ponga el readme (q estan en la pagina de la api), entonces, primero hago un arreglo que va a tener cada dieta, dsp para que pueda cambiar el force de true a false libremente,
//pongo un findOrCreate, para que cuando no estén las dietas en la base las cree, pero si alguna llega a estar, cuando esté recorriendo el map cada dieta, si está no haga nada.
//ESTO LO CAMBIE POR PONER UN SCRIPT Y EL CODIGO EN OTRO ARCHIVO, ASI CADA VEZ Q QUIERA CARGO LA DB MANUALMENTE

  server.listen(PORT, () => {
    console.log('listening at 3001'); // eslint-disable-line no-console
  });
});
