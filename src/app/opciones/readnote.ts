import * as fs from 'fs';
import {ResponseType} from '../type';
import chalk from 'chalk';
/**
 * Class to Read Notes
 */
export class ReadNotes {
  constructor() {
  }
  /**
   * This function reads a note
   * @param user User name
   * @param title Note title
   * @returns Error or correct response
   */
  readNoteCallback = (user: string, title: string, cb: (err: ResponseType | undefined, correct: ResponseType | undefined) => void) => {
    let response: ResponseType = {
      type: 'add',
      success: false,
    };

    fs.access(`src/app/notas/${user}/${title}.json`, fs.constants.F_OK, (err) => {
      if (err) {
        response = {type: 'read', success: false, error: chalk.red('Note not found')};
        cb(response, undefined);
      } else {
        fs.readFile(`src/app/notas/${user}/${title}.json`, (err) => {
          if (err) {
            response = {type: 'read', success: false, error: chalk.red('Error reading note')};
            cb(response, undefined);
          } else {
            const json: any = require(`src/app/notas/${user}/${title}.json`);
            response = {
              type: 'read',
              success: true,
              notes: [json],
            };
            cb(undefined, response);
          }
        });
      }
    });
  };
};
