import * as yargs from 'yargs';
import {RequestType} from '../type';
import {Client} from '../client';
import {removeInterface} from '../comandos/interfaces';

let request: RequestType;

// Add Note

export class RemoveNote implements removeInterface {
  constructor() {}
  public removeNote() {
    yargs.command({
      command: 'remove',
      describe: 'Remove a note',
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
      },
      handler(argv) {
        request = {type: 'remove',
          user: `${argv.user}`,
          title: `${argv.title}`};
        const client = new Client(request);
        client.client();
      },
    });
  }
}
