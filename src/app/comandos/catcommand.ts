import * as yargs from 'yargs';
import chalk from 'chalk';
import {spawn} from 'child_process';
import * as fs from 'fs';

import {catInterface} from './interfaces';
/**
 * cat command, show the content of a file
 */
export class CATcommand implements catInterface {
  constructor() {}
  cat() {
    yargs.command({
      command: 'cat',
      describe: 'Show content of a file',
      builder: {
        path: {
          describe: 'Path to show',
          demandOption: true,
          type: 'string',
        },
      },
      /**
       * @param argv argumentos del comando
       * @param path ruta a mostrar
      */
      handler(argv) {
        if (typeof argv.path === 'string') {
          const cat = spawn('cat', [argv.path]);
          if (!fs.existsSync(argv.path)) {
            console.log(chalk.red('path not found'));
          } else {
            console.log(chalk.green('Content of the file:'));
            cat.stdout.pipe(process.stdout);
          }
        }
      },
    });
  }
}

