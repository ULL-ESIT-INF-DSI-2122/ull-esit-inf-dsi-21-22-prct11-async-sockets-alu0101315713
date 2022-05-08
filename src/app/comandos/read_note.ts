import * as yargs from 'yargs';
import {RequestType} from '../type';
import {Client} from '../client';
import {readInterface} from '../comandos/interfaces';

let request: RequestType;

/**
 * Read Note
 */
export class ReadNote implements readInterface {
  constructor() {}
  /**
   * Read a note
   */
  public readNote() {
    yargs.command({
      command: 'read',
      describe: 'Read a note',
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
      /**
       * @param argv Arguments
       */
      handler(argv) {
        request = {type: 'read',
          user: `${argv.user}`,
          title: `${argv.title}`};
        const client = new Client(request);
        client.client();
      },
    });
  }
}
