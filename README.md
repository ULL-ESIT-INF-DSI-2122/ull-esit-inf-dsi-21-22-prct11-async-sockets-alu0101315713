# Autor: Felipe Gómez Fuentes

- [Autor: Felipe Gómez Fuentes](#autor-felipe-gómez-fuentes)
- [0. Github Pages](#0-github-pages)
- [1. Práctica 10 - Cliente y servidor para una aplicación de procesamiento de notas de texto.](#1-práctica-10---cliente-y-servidor-para-una-aplicación-de-procesamiento-de-notas-de-texto)
- [2. Tareas Previas.](#2-tareas-previas)
- [3. Para empezar.](#3-para-empezar)
- [4. Aplicación](#4-aplicación)
  - [4.1 - Servidor](#41---servidor)
- [4.2 - Manejo de datos](#42---manejo-de-datos)
- [4.3 - Cliente](#43---cliente)
- [5. Conclusiones](#5-conclusiones)
- [6. Bibliografía](#6-bibliografía)

# 0. Github Pages
- Si desea verlo en Pages, consulte [aquí](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101315713/).

# 1. Práctica 10 - Cliente y servidor para una aplicación de procesamiento de notas de texto.
- En este [repositorio](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713) donde haré un resumen haciendo una descripción de todos los pasos para el procedimiento de esta práctica. La práctica consiste en hacer una serie de ejercicios siguiendo la [estructura básica de proyecto](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html) que se vio en clase, incluyendo todos los dichos archivos en el directorio [src](src/) que contiene las soluciones de los ejercicios.

# 2. Tareas Previas.
- Para empezar es necesario realizar antes una serie de tareas previas que nos van a permitir tener las bases para poder configurar un entorno de trabajo adecuado de cara a la realización del informe, por ejemplo haber realizado la Práctica 1, que puede revisar [aquí](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct01-iaas-alu0101315713/), tener leído y aprendido los conocimientos necesarios sobre [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), [Jekyll](https://jekyllrb.com/) y [GitHub Pages](https://lab.github.com/githubtraining/github-pages), además de la lectura de los tutoriales [sobre los métodos que puede utilizar con string](https://www.w3schools.com/js/js_string_methods.asp) y sobre [expresiones regulares en JavaScript](https://www.w3schools.com/js/js_regexp.asp), los [apuntes de Arrays, tuplas y enumerados](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-arrays-tuples-enums.html), los [apuntes de Objetos, clases e interfaces](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-objects-classes-interfaces.html) documentación en [Typedoc](https://typedoc.org/), hacer pruebas unitarias con [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Coveralls](https://coveralls.io/) para la correcta elaboración del mismo, entender la [API asíncrona para cear procesos](https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html#asynchronous-process-creation) y [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html) para escribir código más limpio. A continuación se mostrará una tabla con las tareas previas realizadas (en mi caso):

| Tareas Previas Realizadas.|
| ----- |
|- Aceptar la asignación de GitHub Classroom asociada a esta práctica.|
|- Leer los recursos sobre Markdown, pues es el lenguaje para escribir las prácticas.|
|- Leer los recursos sobre Jekyll, para transformar los ficheros de texto en sitios Web.|
|- Leer los recursos sobre GitHub Pages, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Strings, por si se necesita algún concepto para aprender.|
|- Leer los recursos sobre Arrays, tuplas y enumerados, por si se necesita algún concepto para aprender.|
|- Leer los recursos sobre Objetos, clases e interfaces, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre TypeDoc, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Mocha, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Chai, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Coverall, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre node, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre el manejo de ficheros en node, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre SOLID, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre yargs, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre chalk, por si se necesita algún curso para aprender.|

# 3. Para empezar.
- Los ejercicios deben de cumplir la [estructura básica de proyecto](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html) mencionada anteriormente, e incluiremos los ejercicios en el directorio [./src](src/) haciendo uso de la metodología SOLID. Una vez instaladas las dependencias de Mocha, Chai, Coveralls, TypeDoc, node, yargs y chalk se deberá de hacer la documentación de TypeDoc en la carpeta [./docs](docs/) y la metodología TDD en la carpeta [./tests](tests/).

# 4. Aplicación

## 4.1 - Servidor
- El servidor creará un socket para establecer una conexión, en este caso se hará uso del puerto 60300. Tengo 2 funciones:
Función donde creo el servidor, inicio su puerto de enlace y recibo los datos del cliente:
```ts
start() {
    net.createServer({allowHalfOpen: true}, (connection) => {
      console.log('Un usuario se ha conectado.');
      let datosCliente = '';
      connection.on('data', (data) => {
        datosCliente += data.toString();
        this.datosServidor(datosCliente, connection);
      });
    }).listen(60300, () => {
      console.log('Servidor iniciado en el puerto 60300.');
    });
  }
```
- Función del manejo de los datos en sí:
```ts
/**
   * Se mueve todo el manejo de datos
   * @param datosCliente Datos del cliente
   * @param connection Conexión del cliente
   */
  datosServidor(datosCliente: string, connection: net.Socket) {
    const jsonclient = JSON.parse(datosCliente);
    switch (jsonclient.type) {
      /**
       * Añade una nota
       */
      case 'add':
        console.log(chalk.green('Se ha solicitado una nueva nota.'));
        addNote.addNoteCallback(`${jsonclient.user}`, `${jsonclient.title}`, `${jsonclient.body}`, `${jsonclient.color}`, (err: any, correct: any) => {
          if (err) {
            connection.write(JSON.stringify(err));
          } else if (correct) {
            connection.write(JSON.stringify(correct));
          }
          connection.end();
        });
        break;
        /**
         * Modifica una nota
         */
      case 'update':
        console.log(chalk.green('Se ha solicitado una actualización de nota.'));
        modifyNote.modifyNoteCallback(`${jsonclient.user}`, `${jsonclient.title}`, `${jsonclient.body}`, (err, correct) => {
          if (err) {
            connection.write(JSON.stringify(err));
          } else if (correct) {
            connection.write(JSON.stringify(correct));
          }
          connection.end();
        });
        break;
        /**
         * Elimina una nota
         */
      case 'remove':
        console.log(chalk.green('Se ha solicitado una eliminación de nota.'));
        removeNote.removeNoteCallback(`${jsonclient.user}`, `${jsonclient.title}`, (err, correct) => {
          if (err) {
            connection.write(JSON.stringify(err));
          } else if (correct) {
            connection.write(JSON.stringify(correct));
          }
          connection.end();
        });
        break;
        /**
         * Lee una nota
         */
      case 'read':
        console.log(chalk.green('Se ha solicitado una lectura de nota.'));
        readNote.readNoteCallback(`${jsonclient.user}`, `${jsonclient.title}`, (err: any, correct: any) => {
          if (err) {
            connection.write(JSON.stringify(err));
          } else if (correct) {
            connection.write(JSON.stringify(correct));
          }
          connection.end();
        });
        break;
        /**
         * Lista las notas
         */
      case 'list':
        console.log(chalk.green('Se ha solicitado una lista de notas.'));
        listNotes.listNoteCallback(`${jsonclient.user}`, (err: any, correct: any) => {
          if (err) {
            connection.write(JSON.stringify(err));
          } else if (correct) {
            connection.write(JSON.stringify(correct));
          }
          connection.end();
        });
        break;
    }
  }
}
```

- Para el esta última función hago uso de un evento, que en mi caso lo llamé MyEventEmitter:
```ts
import {EventEmitter} from 'events';
import {RequestType} from './type';
import * as net from 'net';
/**
 * EventEmitter para la comunicación con el cliente
 */
export class MyEventEmitter extends EventEmitter {
  constructor(public connection: net.Socket) {
    super();
  }
  public writeData(message: RequestType) {
    this.connection.write(`${JSON.stringify(message)}`);

    let wholeData = '';
    this.connection.on('data', (dataChunk) => {
      wholeData += dataChunk.toString();
      this.emit('response', wholeData);
    });
  }
}
```
- De esta forma es posible establecer una conexión cliente-servidor por parte del servidor.

# 4.2 - Manejo de datos
- Para que funcionen los comandos decidí crear una clase por cada uno y meterla por ficheros separados. De manera que tuve que hacer 2 ficheros por opcion, una con el yargs que le pide el comando por pantalla al usuario, y otra con la función que va a recibir el servidor donde tendrá que ejecutar el comando que dicho cliente le mande para enviarle la respuesta al cliente.
- Para el tema de las opciones hice algo así en [opciones](src/app/opciones/):
```
📦src
 ┣ 📂app
 ┃ ┣ 📂opciones
 ┃ ┃ ┣ 📜addnote.ts
 ┃ ┃ ┣ 📜adduser.ts
 ┃ ┃ ┣ 📜listnote.ts
 ┃ ┃ ┣ 📜modifynote.ts
 ┃ ┃ ┣ 📜readnote.ts
     ┗ 📜removenote.ts
```

- Donde, dependiendo del comando que le proporcione el cliente, accederá a un fichero u otro del servidor (visto en el switch anterior) y ejecutará el comando para que de un resultado. Ese resultado se lo enviará al cliente.

- La parte donde el cliente escribe los comandos está en el directorio [comandos](src/app/comandos/). Donde cada comando se encuentra en una clase y archivo diferente. Son comandos bastante parecidos a la [práctica 9](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713), donde hago uso de comandos para añadir, modificar, eliminar notas y usuarios, y la [práctica 10](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713.git), donde hago comandos para leer, actualizar y crear directorios y ficheros.
- La mayor diferencia respecto a las otras prácticas fue que ahora solo hay que enviar request al servidor. Por ejemplo:
- ``handler`` de la función `ADDNote`:
```ts
handler(argv) {
        request = {
          type: 'add',
          user: `${argv.user}`,
          title: `${argv.title}`,
          body: `${argv.body}`,
          color: `${argv.color}`};

        const client = new Client(request);
        client.client();
      },
```
- ``handler`` de la función `ADDUser`:
```ts
handler(argv) {
        request = {
          type: 'userAdd',
          user: `${argv.user}`};

        const client = new Client(request);
        client.client();
      },
```
- Como podemos apreciar, los comandos van a ser bastantes similares, y en todos los comandos al final llamamos al cliente para que introduzca por pantalla los argumentos. El resto de comandos del directorio [comandos](src/app/comandos/) que tengan en su nombre `command` son comandos de la práctica anterior que no se piden en esta práctica pero deja el código más utilizable.
# 4.3 - Cliente
- Para el tema del cliente, como se ha explicado antes, hay que pedirle que escriba el comando que quiera ejecutar, para ello primero debe de poder conectarse al puerto, así que lo uniremos con el socket.
```ts
  client() {
    const json: any = this.request;

    const myEventEmitter = new MyEventEmitter(net.connect({port: 60300}));
    myEventEmitter.writeData(json);

    myEventEmitter.on('response', (data) => {
      console.log(this.display(data));
    });
```
- Una vez conectado, hice un display del resultado que tendrá el usuario una vez se ejecute correctamente. Este display tiene 2 switches, uno para el caso de que se ejecute correctamente y otro cuando no.

- Por último, hice un directorio [app](src/app/app.ts) donde se ejecuta el cliente y contiene todas las opciones y todos los comandos:
  - Importaciones:
```ts
import * as yargs from 'yargs';
import {LScommand} from './comandos/lscommand';
import {MKDIRcommand} from './comandos/mkdircommand';
import {LSFILEScommand} from './comandos/lsfilescommand';
import {CATcommand} from './comandos/catcommand';
import {RMcommand} from './comandos/rmcommand';
import {MVcommand} from './comandos/mvcommand';
import {CPcommand} from './comandos/cpcommand';

import {ADDNote} from './comandos/add_note';
import {ModifyNote} from './comandos/modify_note';
import {RemoveNote} from './comandos/remove_note';
import {ReadNote} from './comandos/read_note';
import {ListNotescommand} from './comandos/list_note';
import {ADDuser} from './comandos/add_user';
```
  - Exportaciones
```ts
export const ls = new LScommand();
export const mkdir = new MKDIRcommand();
export const lsfiles = new LSFILEScommand();
export const cat = new CATcommand();
export const rm = new RMcommand();
export const mv = new MVcommand();
export const cp = new CPcommand();

export const addNote = new ADDNote();
export const addUser = new ADDuser();
export const modifyNote = new ModifyNote();
export const removeNote = new RemoveNote();
export const readNote = new ReadNote();
export const listNote = new ListNotescommand();
```
  - LLamadas a funciones:
```ts
ls.ls();
mkdir.mkdir();
lsfiles.lsfiles();
cat.cat();
rm.rm();
mv.mv();
cp.cp();

addNote.addNote();
addUser.adduser();
modifyNote.modifyNote();
removeNote.removeNote();
readNote.readNote();
listNote.list();

yargs.parse();
```

- Como se puede observar, hay clases importadas y exportadas separadas, porque como se dijo con anterioridad, hay clases que ya venían hechas que no entraban en el enunciado, sino que son un plus, hechas ya de prácticas anteriores, y las últimas son las que sí se piden en el enunciado.

# 5. Conclusiones

- Los ejercicios han servido como repaso sobre cómo usar las funciones de las strings, el uso de los arrays, tuplas y los enumerados en TypeScript. Hay que tener en cuenta que, para las pruebas TDD, primero hay que tener bien instalado Mocha y Chai, y bien escrito el archivo `.mocharc.json`, que siguiendo este [vídeo](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view) tendría que quedar algo similar o igual a [esto](./.mocharc.json).


- Para el caso de TypeDoc, es necesario, aparte de tener las dependencias instaladas, seguir este [vídeo](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) como ayuda fundamental a tenerlo bien instalado.

- También es interesante el uso de la herramienta Coverall que nos informa los archivos con código fuente en Typescript que se han analizado y que se sacan del fichero [.mocharc.json](./.mocharc.json). Coverall nos indica el cubrimiento que le damos a las funciones, la líneas que no están cubiertas y cuánto % se cubre de las sentencias y las ramas. Para saber instalarlo una buena opción es ver este [vídeo](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view).


- Otro factor bastante importante fue hacer uso de los [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html), que fue clave para hacer clases específicas pra métodos específicos, estos principios se usaron en toda la práctica.

- La librería fs ha sido bastante clave para poder manejar los ficheros de manera asíncrona, como se ha explicado en los puntos anteriores.

- **HAY FALLOS EN ALGUNOS COMANDOS.** No se han podido terminar con éxito algunos comandos, como por ejemplo, el `addUser` o el `read`, pero en cambio, algunos como el `list` sí funcionan correctamente. El comando se pasa bien por parte del cliente, el servidor recibe de forma correcta el comando, pero hay condiciones que no se cumplen a la hora de devolver el resultado al cliente. Se ha intentado de varias formas y no se ha encontrado solución.

- Para poder hacer buen uso del SonarCloud, tuvo que ser necesario **no usar** la última versión de node (18.0.0), sino que tuve que usar la versión `17.7.2`. De esta forma se pudo realizar tanto las pruebas de Coveralls como el scanner de SonarCloud correctamente.

# 6. Bibliografía
1. [Enunciado Práctica 11](https://ull-esit-inf-dsi-2122.github.io/prct11-async-sockets/)
2. [Introducción a Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
3. [Recurso sobre GitHub Pages](https://docs.github.com/en/pages)
4. [Página web de Jekyll](https://jekyllrb.com/)
5. [Tutorial métodos con strings](https://www.w3schools.com/js/js_string_methods.asp)
6. [Tutorial expresiones regulares en JavaScript](https://www.w3schools.com/js/js_regexp.asp)
7. [TypeDoc](https://typedoc.org/)
8. [Mocha](https://mochajs.org/)
9.  [Chai](https://www.chaijs.com/)
10. [Eslint](https://eslint.org/)
11. [Coverall](https://coveralls.io/)
12. [Apuntes de introducción a NodeJS](https://ull-esit-inf-dsi-2122.github.io/nodejs-theory/nodejs-intro.html)
13. [Apuntes del sistema de ficheros en NodeJS](https://ull-esit-inf-dsi-2122.github.io/nodejs-theory/nodejs-filesystem.html)
14. [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)
15. [yargs](https://www.npmjs.com/package/yargs)
16. [chalk](https://www.npmjs.com/package/chalk)
17. [API asíncrona de Node](https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html#asynchronous-process-creation)