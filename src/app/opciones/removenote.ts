import * as fs from 'fs';
import {ResponseType} from '../type';
import chalk from 'chalk';

/**
 * Class to Remove Notes
 */
export class RemoveNote {
  constructor() {
  }

  /**
   * This function removes a note
   * @param user User name
   * @param title Note title
   * @returns Error or correct response
   */
  removeNoteCallback = (user: string, title: string, cb: (err: ResponseType | undefined, correct: ResponseType | undefined) => void) => {
    let response: ResponseType = {
      type: 'add',
      success: false,
    };
    fs.access(`src/app/notas/${user}/${title}.json`, fs.constants.F_OK, (err: any) => {
      if (err) {
        response = {type: 'remove', success: false, error: chalk.red('Note not found')};
        cb(response, undefined);
      } else {
        fs.unlink(`src/app/notas/${user}/${title}.json`, (err: any) => {
          if (err) {
            response = {type: 'remove', success: false, error: chalk.red('Error removing note')};
            cb(response, undefined);
          }

          const json = require(`src/app/notas/${user}/${title}.json`);
          response = {
            type: 'remove',
            success: true,
            notes: [json],
          };

          cb(undefined, response);
        });
      }
    });
  };
};
