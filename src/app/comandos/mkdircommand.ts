import * as yargs from 'yargs';
import chalk from 'chalk';
import {spawn} from 'child_process';
import * as fs from 'fs';

import {mkdirInterface} from './interfaces';
/**
 * mkdir command, create a directory
 */
export class MKDIRcommand implements mkdirInterface {
  constructor() {}
  mkdir() {
    yargs.command({
      command: 'mkdir',
      describe: 'Create a new directory',
      builder: {
        path: {
          describe: 'Path to create',
          demandOption: true,
          type: 'string',
        },
      },
      /**
        * @param argv argumentos del comando
        * @param path ruta a crear
      */
      handler(argv) {
        if (typeof argv.path === 'string') {
          const mkdir = spawn('mkdir', [argv.path]);
          if (!fs.existsSync(argv.path)) {
            console.log(chalk.green('Directory created successfully'));
            mkdir.stdout.pipe(process.stdout);
          } else {
            console.log(chalk.red('that directory already exists!'));
          }
        }
      },
    });
  }
}
