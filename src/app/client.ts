/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import chalk from 'chalk';
import * as net from 'net';
import {MyEventEmitter} from './eventEmitter';
import {RequestType} from './type';

/**
 * Client class
 */
export class Client {
  /**
   * Gets the request type json
   * @param request Client request
   */
  constructor(private request: RequestType) {}

  /**
   * Client functions
   */
  client() {
    const json: any = this.request;

    const myEventEmitter = new MyEventEmitter(net.connect({port: 60300}));
    myEventEmitter.writeData(json);

    myEventEmitter.on('response', (data) => {
      console.log(this.display(data));
    });
  }

  /**
   * Print the content of the response json
   * @param response Json response on string format
   */
  display(response: string) {
    const title = [];
    const color = [];
    const body = [];
    const respuesta = JSON.parse(response);
    let result = '';

    if (respuesta.success === true) {
      if (respuesta.notes) {
        for (const note of respuesta.notes) {
          title.push(note.title);
          color.push(note.color);
          body.push(note.body);
        }
      }

      if (respuesta.type === 'userAdd') {
        return console.log(chalk.green(`El usuario ${respuesta.user} ha creado su directorio`));
      }

      if (respuesta.type === 'add') {
        console.log(`${respuesta.notes.title}`);
        return console.log(chalk.green(`La nota ${title[0]} ha sido creada correctamente`));
      }

      if (respuesta.type === 'update') {
        return console.log(chalk.green(`La nota ${title[0]} ha sido actualizada correctamente`));
      }

      if (respuesta.type === 'remove') {
        return console.log(chalk.green(`La nota ${title[0]} ha sido eliminada correctamente`));
      }

      if (respuesta.type === 'read') {
        return console.log(chalk.green(`La nota ${title[0]} ha sido leida correctamente`));
      }

      if (respuesta.type === 'list') {
        for (let i = 0; i < title.length; i++) {
          result += `${chalk.green(`${i + 1}`)}. ${chalk.green(`${title[i]}`)} => ${chalk.green(`${body[i]}`)}`;
        }
        return result;
      }
    } else if (respuesta.success === false) {
      if (respuesta.type === 'userAdd') {
        return respuesta.error;
      }

      if (respuesta.type === 'add') {
        return respuesta.error;
      }

      if (respuesta.type === 'update') {
        return respuesta.error;
      }

      if (respuesta.type === 'remove') {
        return respuesta.error;
      }

      if (respuesta.type === 'read') {
        return respuesta.error;
      }

      if (respuesta.type === 'list') {
        return respuesta.error;
      }
    }
  }
}
