import * as yargs from 'yargs';
import chalk from 'chalk';
import {spawn} from 'child_process';
import * as fs from 'fs';

import {listFilesInterface} from './interfaces';
/**
 * listFiles command, list only the files
 */
export class LSFILEScommand implements listFilesInterface {
  constructor() {}
  lsfiles() {
    yargs.command({
      command: 'ls-files',
      describe: 'List files in a directory',
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
          const ls = spawn('ls', ['-p', argv.path]);
          const egrep = spawn('egrep', ['-v', '/']);
          if (!fs.existsSync(argv.path)) {
            console.log(chalk.red('path not found'));
          } else {
            console.log(chalk.green('List of files:'));
            ls.stdout.pipe(egrep.stdin);
            egrep.stdout.pipe(process.stdout);
          }
        }
      },
    });
  }
}
