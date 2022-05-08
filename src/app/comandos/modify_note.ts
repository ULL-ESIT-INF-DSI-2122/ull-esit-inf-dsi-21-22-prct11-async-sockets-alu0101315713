import * as yargs from 'yargs';
import {RequestType} from '../type';
import {Client} from '../client';
import {modifynoteInterface} from '../comandos/interfaces';

let request: RequestType;

// Add Note
export class ModifyNote implements modifynoteInterface {
  constructor() {}
  public modifyNote() {
    yargs.command({
      command: 'modify',
      describe: 'Modify an existing Note',
      builder: {
        user: {
          describe: 'User name',
          demandOption: true,
          type: 'string',
        },
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        },
        body: {
          describe: 'Note',
          demandOption: true,
          type: 'string',
        },
      },
      handler(argv) {
        request = {
          type: 'update',
          user: `${argv.user}`,
          title: `${argv.title}`,
          body: `${argv.body}`};

        const client = new Client(request);
        client.client();
      },
    });
  }
}

