ORGANIZACION REACT - REDUX   ---------------------------

Dentro de src, voy a tener todo. Me conviene modularizar todo por carpetas, una carpeta para las actions creators, una carpeta para el reducer q recibe las actions, una carpeta para la store, una para los componentes, q adentro tenga carpetas para cada componente, y dentro de las carpetas poner el archivo .jsx y .css, y si quisiera poner imagenes una carpeta para estas.

Por fuera de estas carpetas dentro de src, estará App.js, que esta basicamente encerrará a toda la aplicacion.
Acá voy a hacer el routeo que me lleve a cada uno de los componentes. Los routes tienen q estar encerrados por un BrowserRouter, puedo poner ese tag dentro de app, o encerrar a app dentro de este tag en index.js.
Index.js va a ser el q haga el reactDom.render() y mande todo al tag del index.html (dentro de public) con el id "root". En este index debo encerrar la app con el 
    <Provider store={store}> 
         <App/>
    <Provider/>
Y debo importarme la store ya creada.



ACTIONS CREATORS -> REDUCER -> COMPONENTS
Siempre cuando haga todo tengo q acordarme de antes ponerle un export, o export default (solo puedo usar uno por archivo)
Estas actions son las que hacen los gets y posts a mi backend, despues llegan al reducer y cargan mi estado global con la info que devuelven (payload), 

En el reducer, importo las actions, defino el estado inicial, y exporto la function reducer, la cual hace un switch o una serie de ifs, para acorde a cada action, cambiar o setear el estado con el valor devuelto por la action (dispatched).

Ahora paso a los componentes.



Y