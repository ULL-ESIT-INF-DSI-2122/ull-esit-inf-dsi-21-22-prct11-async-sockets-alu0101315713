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
