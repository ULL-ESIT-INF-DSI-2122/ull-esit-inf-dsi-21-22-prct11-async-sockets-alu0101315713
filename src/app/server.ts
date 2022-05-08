/** El servidor debe recibir la petición del cliente, procesarla, esto es, ejecutar el comando solicitado,
 * y devolver la respuesta del comando al cliente. Para ello, piense que el comando solicitado puede haberse
 * ejecutado correctamente o puede haber fallado, por ejemplo, por no existir o porque se le han pasado unos
 * argumentos no válidos. Solo se pueden usar sockets*/

import * as net from 'net';
import chalk from 'chalk';
import {AddNote} from './opciones/addnote';
import {RemoveNote} from './opciones/removenote';
import {ModifyNote} from './opciones/modifynote';
import {ReadNotes} from './opciones/readnote';
import {ListNotes} from './opciones/listnote';

const addNote = new AddNote();
const modifyNote = new ModifyNote();
const removeNote = new RemoveNote();
const listNotes = new ListNotes();
const readNote = new ReadNotes();
/**
 * Clase servidor, detecta los comandos y los envía al usuario
 */
export class Server {
  constructor() {}
  /**
   * Función que se ejecuta cuando se conecta un cliente
   */
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

const server = new Server();
server.start();
