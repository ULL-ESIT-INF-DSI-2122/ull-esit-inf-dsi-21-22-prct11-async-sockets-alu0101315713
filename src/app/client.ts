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
    const titleArray = [];
    const colorArray = [];
    const bodyArray = [];
    const serverResponse = JSON.parse(response);
    let result = '';

    if (serverResponse.success === true) {
      if (serverResponse.notes) {
        for (const note of serverResponse.notes) {
          titleArray.push(note.title);
          colorArray.push(note.color);
          bodyArray.push(note.body);
        }
      }

      if (serverResponse.type === 'userAdd') {
        return console.log(chalk.green(`El usuario ${serverResponse.user} ha creado su directorio`));
      }

      if (serverResponse.type === 'add') {
        console.log(`${serverResponse.notes.title}`);
        return console.log(chalk.green(`La nota ${titleArray[0]} ha sido creada correctamente`));
      }

      if (serverResponse.type === 'update') {
        return console.log(chalk.green(`La nota ${titleArray[0]} ha sido actualizada correctamente`));
      }

      if (serverResponse.type === 'remove') {
        return console.log(chalk.green(`La nota ${titleArray[0]} ha sido eliminada correctamente`));
      }

      if (serverResponse.type === 'read') {
        return console.log(chalk.green(`La nota ${titleArray[0]} ha sido leida correctamente`));
        // return `Título: ${color.getColor(`${colorArray}`, `${titleArray}`)} => Contenido: ${color.getColor(`${colorArray}`, `${bodyArray}`)}`;
      }

      if (serverResponse.type === 'list') {
        for (let i = 0; i < titleArray.length; i++) {
          result += `${chalk.green(`${i + 1}`)}. ${chalk.green(`${titleArray[i]}`)} => ${chalk.green(`${bodyArray[i]}`)}`;
          // result += `${color.getColor(`${colorArray[i]}`, `${titleArray[i]}`)}` + '\n';
        }
        return result;
      }
    } else if (serverResponse.success === false) {
      if (serverResponse.type === 'userAdd') {
        return serverResponse.error;
      }

      if (serverResponse.type === 'add') {
        return serverResponse.error;
      }

      if (serverResponse.type === 'update') {
        return serverResponse.error;
      }

      if (serverResponse.type === 'remove') {
        return serverResponse.error;
      }

      if (serverResponse.type === 'read') {
        return serverResponse.error;
      }

      if (serverResponse.type === 'list') {
        return serverResponse.error;
      }
    }
  }
}
