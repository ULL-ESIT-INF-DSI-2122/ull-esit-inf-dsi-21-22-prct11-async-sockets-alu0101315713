import * as yargs from 'yargs';
import chalk from 'chalk';
import {spawn} from 'child_process';
import * as fs from 'fs';

import {rmInterface} from './interfaces';
/**
 * rm command, remove a file or directory
 */
export class RMcommand implements rmInterface {
  constructor() {}
  rm() {
    yargs.command({
      command: 'rm',
      describe: 'Delete files and directories',
      builder: {
        path: {
          describe: 'Path to delete',
          demandOption: true,
          type: 'string',
        },
      },
      /**
        * @param argv argumentos del comando
        * @param path ruta a borrar
      */
      handler(argv) {
        if (typeof argv.path === 'string') {
          const rm = spawn('rm', [argv.path]);
          // We see if the directory exists
          if (fs.existsSync(argv.path)) {
            console.log(chalk.green('Directory or file deleted successfully'));
            rm.stdout.pipe(process.stdout);
          } else {
            console.log(chalk.red('path not found'));
          }
        }
      },
    });
  }
}
