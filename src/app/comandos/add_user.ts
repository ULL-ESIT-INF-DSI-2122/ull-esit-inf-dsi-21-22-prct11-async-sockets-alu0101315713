import * as yargs from 'yargs';
import {RequestType} from '../type';
import {Client} from '../client';
import {adduserInterface} from '../comandos/interfaces';

let request: RequestType;

// Add Note

export class ADDuser implements adduserInterface {
  constructor() {}
  public adduser() {
    yargs.command({
      command: 'userAdd',
      describe: 'Add a new user',
      builder: {
        user: {
          describe: 'User name',
          demandOption: true,
          type: 'string',
        },
      },
      handler(argv) {
        request = {
          type: 'userAdd',
          user: `${argv.user}`};

        const client = new Client(request);
        client.client();
      },
    });
  }
}

