# Autor: Felipe Gómez Fuentes

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713/actions/workflows/coverall.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713/actions/workflows/coverall.yml) [![Test](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713/actions/workflows/node.js.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713)

- [Autor: Felipe Gómez Fuentes](#autor-felipe-gómez-fuentes)
- [0. Github Pages](#0-github-pages)
- [1. Práctica 10 - Sistema de ficheros y creación de procesos en Node.js](#1-práctica-10---sistema-de-ficheros-y-creación-de-procesos-en-nodejs)
- [2. Tareas Previas.](#2-tareas-previas)
- [3. Para empezar.](#3-para-empezar)
- [4. Ejercicios](#4-ejercicios)
  - [4.1 - Ejercicio 1](#41---ejercicio-1)
- [4.2 - Ejercicio 2](#42---ejercicio-2)
- [4.3 - Ejercicio 3](#43---ejercicio-3)
- [4.4 - Ejercicio 4](#44---ejercicio-4)
- [5. Conclusiones](#5-conclusiones)
- [6. Bibliografía](#6-bibliografía)

# 0. Github Pages
- Si desea verlo en Pages, consulte [aquí](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct10-async-fs-process-alu0101315713/).

# 1. Práctica 10 - Sistema de ficheros y creación de procesos en Node.js
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

# 4. Ejercicios

## 4.1 - Ejercicio 1
El programa que se propone en el enunciado recibe un fichero por escrito y genera un watcher. Éste revisa a tiempo real los cambios ocurridos en el fichero. Se usará el método access() del módulo fs, que sirve para comprobar los distintos estados posibles en el fichero. El comando F_OK nos ayudará para saber si el fichero existe o no.

Para hacernos una idea, el programa funciona de esta manera:
- Se comprueba si hay 3 argumentos, siendo el tercero el fichero
  - Si no hay 3 argumentos, entra el console.log() a la pila de llamadas, se ejecuta y se finaliza el programa.
  - Si se dan correctamente, se ejecuta el programa.
- Entra access() a la pila de llamadas.
- En caso de que haya un error (`'err' == true`), saldrá un el console.log() avisando de que el fichero no existe.
  - Se ejecuta el console.log() dicho, que saldrá de la pila de llamadas.
- En el caso contrario (`'err' == false`):
  - Entra a la pila de llamadas el console.log() indicando que se va a observar el fichero. Se ejecuta y sale de la pila de llamadas.
  - Entra también el watch().
  - Entra también el console.log() que avisa de que el fichero no se observa. Se imprime por pantalla y sale de la pila de llamadas.
  - watch() se dirige al registro de eventos.
  - Cuando se modifique el fichero.
  - watch() salta con el evento `change` y este pasa a la cola de manejadores.
  - Entra en la pila de llamadas el console.log() que nos informa de que se ha cambiado el fichero. Se muestra por pantalla. Sale de la pila de llamadas.
  - Repetirá lo mismo cada vez que se modifique el fichero.

# 4.2 - Ejercicio 2

- Para este ejercicio creé una clase Reader donde pido por atributos el nombre del fichero.

```ts
/**
 * Reader class, it has 2 methods, 1 using pipe and
 * another one without it
 */
export class Reader {
  /**
   * @param file file to read
   */
  constructor(private file: string) {
  }
```

- Luego hice 2 métodos:
- Méodo 1:
  - Hago uso del método `pipe`. Primero creo los comandos `cat` y `grep` que piden en el enunciado con  el método `spawn`. En este método, la palabra que busco con el `grep` no la introduce el usuario. La idea principal es usar pipe para poder unir (si el usuario quisiera) ambos comandos, haciendo uso de `cat.stdout.pipe(grep.stdin);` en mi caso. Con un auxiliar voy recogiendo las palabras repetidas del grep y la línea en la que aparece, y luego lo imprimo con el método `on`.
```ts
  /**
   * it makes a cat and grep command using pipe
   */
  metodo1() {
    const cat = spawn('cat', ['-n', this.file]);
    const grep = spawn('grep', ['Hola']);
    cat.stdout.pipe(grep.stdin);
    let auxiliaryGrep: String = '';
    grep.stdout.on('data', (piece) => {
      auxiliaryGrep = piece.toString();
    });
    grep.on('close', () => {
      console.log();
      console.log(chalk.green('File Content:'));
      console.log(auxiliaryGrep);
    });
  }
  ```
- Método 2:
  - Aquí no hago uso del método pipe, por lo cual creo el comando de `cat` y `grep` directamente con un único spawn, hago el mismo auxiliar con el mismo uso para el `grep`, y aquí tuve más libertad para poder imprimir por pantalla el número de veces que aparece la palabra, que en mi caso obligué que sea `Hola`.
```ts
  /**
 * it makes a cat and grep command without pipe
 */
  metodo2() {
    const catGrep = spawn('cat', [this.file, 'grep', 'Hola']);
    let contador = 0;
    let auxiliaryCatGrep = '';
    catGrep.stdout.on('data', (piece) => {
      auxiliaryCatGrep = piece.toString();
    });
    catGrep.on('close', () => {
      console.log();
      console.log(chalk.green('File Content:'));
      console.log(auxiliaryCatGrep);
      const result = auxiliaryCatGrep.split(/\s+/);
      result.forEach((element) => {
        if (element === 'Hola') {
          contador++;
        }
      });
      if (contador === 0) {
        console.log();
        console.log(chalk.red('No se encontró la palabra'));
      } else {
        console.log();
        console.log(chalk.green('The word "Hola" appears ' + contador + ' times'));
      }
    });
  }
  ```

# 4.3 - Ejercicio 3

- Para revisar los cambios que van a ir surgiendo dentro del fichero y de manera óptima, había que usar el método `watch()`, así que hice uso de `yargs` para dar más comodidad a la hora de añadir los comandos. Obligo a que escriba `watch` y luego que escriba la ruta donde se encuentre el archivo. Si se escriben bien los argumentos, que son 4, el comando node, el programa de node, el comando watch y el nombre del archivo, no saltará un mensaje de error, y se dispondrá a buscar la existencia del archivo con la función `F_OK`. Si pasa el control, ya estará dentor del fichero y a la espera de que surjan cambios. Aquí ya funciona exactamente igual que en el ejercicio 1.
```ts
/**
 * watch command, it sees if the file you ae looking forEach
 * exists and has been changed or rename at any time
 */
yargs.command({
  command: 'watch',
  describe: 'watch a file',
  builder: {
  },
  handler() {
    if (process.argv.length !== 4) {
      console.log(chalk.green('Entra'));
      console.log(chalk.blue('node dist/ejercicio3/ejercicio-3.js watch [nombre archivo]'));
    } else {
      fs.access(process.argv[3], fs.constants.F_OK, (err) => {
        if (err) {
          console.log(chalk.red('No existe el fichero'));
          console.log(chalk.green('Escoja una nueva ruta'));
        } else {
          fs.watch(process.argv[3], (eventType, filename) => {
            if (eventType === 'change') {
              console.clear();
              console.log(chalk.green('Fichero modificado: ' + filename));
            } else if (eventType === 'rename') {
              console.clear();
              console.log(chalk.green('File renombrado: ' + filename));
            }
          });
        }
      });
    }
  },
});
```

# 4.4 - Ejercicio 4

- En este ejercicio, como en todos, cumplo los principios SOLID, pero en [este ejercicio](src/ejercicio4/) se nota bastante. Tengo los comandos en la carpeta [comandos](src/ejercicio4/comandos/), donde en cada fichero hay un comando que se nos pide en el enunciado: 
1. Dada una ruta concreta, mostrar si es un directorio o un fichero.
2. Crear un nuevo directorio a partir de una nueva ruta que recibe como parámetro.
3. Listar los ficheros dentro de un directorio.
4. Mostrar el contenido de un fichero (similar a ejecutar el comando cat).
5. Borrar ficheros y directorios.
6. Mover y copiar ficheros y/o directorios de una ruta a otra. Para este caso, la aplicación recibirá una ruta origen y una ruta destino. En caso de que la ruta origen represente un directorio, se debe copiar dicho directorio y todo su contenido a la **ruta destino**.

- Al hacer uso de **wrapper**, se simplifica muchísimo el código, cada comando viene implementado por una interfaz que creo [aquí](src/ejercicio4/comandos/interfaces.ts). Cada comando estará dentro de un yargs, y dentro de un método de una clase distinta. Todos los objetos se crearán dentro de una [app](src/ejercicio4/app.ts) donde se ejecutará la app por completo:
```ts

import * as yargs from 'yargs';
import {LScommand} from './comandos/lscommand';
import {MKDIRcommand} from './comandos/mkdircommand';
import {LSFILEScommand} from './comandos/lsfilescommand';
import {CATcommand} from './comandos/catcommand';
import {RMcommand} from './comandos/rmcommand';
import {MVcommand} from './comandos/mvcommand';
import {CPcommand} from './comandos/cpcommand';

const ls = new LScommand();
const mkdir = new MKDIRcommand();
const lsfiles = new LSFILEScommand();
const cat = new CATcommand();
const rm = new RMcommand();
const mv = new MVcommand();
const cp = new CPcommand();

ls.ls();
mkdir.mkdir();
lsfiles.lsfiles();
cat.cat();
rm.rm();
mv.mv();
cp.cp();

yargs.parse();

```
# 5. Conclusiones

- Los ejercicios han servido como repaso sobre cómo usar las funciones de las strings, el uso de los arrays, tuplas y los enumerados en TypeScript. Hay que tener en cuenta que, para las pruebas TDD, primero hay que tener bien instalado Mocha y Chai, y bien escrito el archivo `.mocharc.json`, que siguiendo este [vídeo](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view) tendría que quedar algo similar o igual a [esto](./.mocharc.json).


- Para el caso de TypeDoc, es necesario, aparte de tener las dependencias instaladas, seguir este [vídeo](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) como ayuda fundamental a tenerlo bien instalado.

- También es interesante el uso de la herramienta Coverall que nos informa los archivos con código fuente en Typescript que se han analizado y que se sacan del fichero [.mocharc.json](./.mocharc.json). Coverall nos indica el cubrimiento que le damos a las funciones, la líneas que no están cubiertas y cuánto % se cubre de las sentencias y las ramas. Para saber instalarlo una buena opción es ver este [vídeo](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view).


- Otro factor bastante importante fue hacer uso de los [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html), que fue clave para hacer clases específicas pra métodos específicos, estos principios se usaron en toda la práctica, por ejemplo, en [este ejercicio](src/ejercicio4/).

- La librería fs ha sido bastante clave para poder manejar los ficheros de manera asíncrona, como se ha explicado en los puntos anteriores.

- Wrapper ha servido de mucho para optimizar código en menos líneas y hacer que sea más legible

- Se puede observar que se ha usado las funciones de chalk para imprimir mensajes de colores en todas las funciones. Saldrá verde en caso de que se ejecute correctamente, en rojo de que haya algún fallo, y en el caso del comando `list`, si se ejecuta correctamente, saldrá el nombre de la(s) nota(s) del color que tengan como atributo.

- Para poder hacer buen uso del SonarCloud, tuvo que ser necesario **no usar** la última versión de node (18.0.0), sino que tuve que usar la versión `17.7.2`. De esta forma se pudo realizar tanto las pruebas de Coveralls como el scanner de SonarCloud correctamente.

# 6. Bibliografía
1. [Enunciado Práctica 10](https://ull-esit-inf-dsi-2122.github.io/prct10-async-fs-process/)
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