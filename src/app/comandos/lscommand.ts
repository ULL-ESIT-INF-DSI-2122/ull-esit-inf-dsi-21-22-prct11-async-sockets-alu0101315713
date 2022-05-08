import * as yargs from 'yargs';
import * as fs from 'fs';
import chalk from 'chalk';
import {spawn} from 'child_process';

import {lsInterface} from './interfaces';
/**
 * ls command, list files and directories
 */
export class LScommand implements lsInterface {
  constructor() {}
  ls() {
    yargs.command({
      command: 'ls',
      describe: 'List files and directories',
      builder: {
        path: {
          describe: 'Path to list',
          demandOption: true,
          type: 'string',
        },
      },
      /**
        * @param argv argumentos del comando
        * @param path ruta a listar
      */
      handler(argv) {
        if (typeof argv.path === 'string') {
          if (!fs.existsSync(argv.path)) {
            console.log(chalk.red('path not found'));
          } else {
            const ls = spawn('ls', [argv.path]);
            console.log(chalk.green('List of files:'));
            ls.stdout.pipe(process.stdout);
          }
        }
      },
    });
  }
}
