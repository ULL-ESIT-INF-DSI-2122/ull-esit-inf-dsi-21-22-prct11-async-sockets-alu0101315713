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
  display(response: string): any {
    const title: string[] = [];
    const color = [];
    const body = [];
    const respuesta = JSON.parse(response);

    if (respuesta.success === true) {
      if (respuesta.notes) {
        for (const note of respuesta.notes) {
          title.push(note.title);
          color.push(note.color);
          body.push(note.body);
        }
      }
      switch (respuesta.type) {
        case 'add':
          return chalk.green(`Added note ${title}`);
          break;
        case 'read':
          return chalk.green(`Read note ${title}`);
          break;
        case 'remove':
          return chalk.green(`Removed note ${title}`);
          break;
        case 'update':
          return chalk.green(`Updated note ${title}`);
          break;
        case 'list':
          return chalk.green(`List notes`);
          break;
        case 'userAdd':
          return chalk.green(`Added user ${respuesta.user}`);
          break;
      }
    } else if (respuesta.success === false) {
      switch (respuesta.type) {
        case 'add':
          return chalk.red(`Error adding note ${title}`);
          break;
        case 'read':
          return chalk.red(`Error reading note ${title}`);
          break;
        case 'remove':
          return chalk.red(`Error removing note ${title}`);
          break;
        case 'update':
          return chalk.red(`Error updating note ${title}`);
          break;
        case 'list':
          return chalk.red(`Error listing notes`);
          break;
        case 'userAdd':
          return chalk.red(`Error adding user ${respuesta.user}`);
          break;
      }
    }
  }
}
