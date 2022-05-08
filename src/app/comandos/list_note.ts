import * as yargs from 'yargs';
import {listInterface} from '../comandos/interfaces';
import {RequestType} from '../type';
import {Client} from '../client';

let request: RequestType;


/**
 * ls command, list files and directories
 */
export class ListNotescommand implements listInterface {
  constructor() {}
  list() {
    yargs.command({
      command: 'list',
      describe: 'List files and directories',
      builder: {
        user: {
          describe: 'Username',
          demandOption: true,
          type: 'string',
        },
      },
      /**
        * @param argv argumentos del comando
        * @param path ruta a listar
      */
      handler(argv) {
        request = {
          type: 'list',
          user: `${argv.user}`};

        const client = new Client(request);
        client.client();
      },
    });
  }
}
