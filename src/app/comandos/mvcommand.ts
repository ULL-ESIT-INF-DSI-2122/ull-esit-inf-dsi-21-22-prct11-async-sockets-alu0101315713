import * as yargs from 'yargs';
import chalk from 'chalk';
import {spawn} from 'child_process';
import * as fs from 'fs';

import {mvinterface} from './interfaces';
/**
 * mv command, move a file or directory into another place
 */
export class MVcommand implements mvinterface {
  constructor() {}
  mv() {
    yargs.command({
      command: 'mv',
      describe: 'Move files and directories',
      builder: {
        path: {
          describe: 'Path to move',
          demandOption: true,
          type: 'string',
        },
        path2: {
          describe: 'Path to move to',
          demandOption: true,
          type: 'string',
        },
      },
      /**
        * @param argv argumentos del comando
        * @param path ruta a mover
        * @param path2 ruta a mover
      */
      handler(argv) {
        // we use spawn to move the file or directory
        if (typeof argv.path === 'string' && typeof argv.path2 === 'string') {
          const mv = spawn('mv', [argv.path, argv.path2]);
          // if its a directory, we copy all the files and directories inside
          if (fs.existsSync(argv.path)) {
            console.log(chalk.green('Directory or file moved successfully'));
            mv.stdout.pipe(process.stdout);
          } else {
            console.log(chalk.red('path not found'));
          }
        }
      },
    });
  }
}
