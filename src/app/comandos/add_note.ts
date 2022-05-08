import * as yargs from 'yargs';
import {RequestType} from '../type';
import {Client} from '../client';
import {addnoteInterface} from '../comandos/interfaces';

let request: RequestType;

/**
 * Add Note
 */
export class ADDNote implements addnoteInterface {
  constructor() {}
  /**
   * Add a new note
   */
  addNote() {
    yargs.command({
      command: 'add',
      describe: 'Add a new note',
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
        color: {
          describe: 'Note color',
          demandOption: true,
          type: 'string',
        },
      },
      /**
       * @param argv Arguments
       */
      handler(argv) {
        request = {
          type: 'add',
          user: `${argv.user}`,
          title: `${argv.title}`,
          body: `${argv.body}`,
          color: `${argv.color}`};

        const client = new Client(request);
        client.client();
      },
    });
  }
}

