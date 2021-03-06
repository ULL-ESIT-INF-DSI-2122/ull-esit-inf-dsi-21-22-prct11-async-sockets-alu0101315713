import * as fs from 'fs';
import {Note, ResponseType} from '../type';
import chalk from 'chalk';

/**
 * Class to List
 */
export class ListNotes {
  constructor() {
  }

  /**
   * This function list all notes on any directory of a user
   * @param user User Name
   * @returns Error or correct response
   */
  listNoteCallback = (user: string, cb: (err: ResponseType | undefined, correct: ResponseType | undefined) => void) => {
    const notesArray: Note[] = [];
    let response: ResponseType = {
      type: 'add',
      success: false,
    };
    /**
     * Check if the user directory exists
     */
    fs.access(`src/app/notas/${user}/`, fs.constants.F_OK, (err) => {
      if (err) {
        response = {type: 'list', success: false, error: 'User not found'};
        cb(response, undefined);
      } else {
        /**
         * List all notes
         */
        fs.access(`src/app/notas/${user}/`, fs.constants.F_OK, (err) => {
          if (err) {
            response = {type: 'list', success: false, error: chalk.red('User not found')};
            cb(response, undefined);
            /**
             * List all notes
             */
            fs.readdir(`src/app/notas/${user}/`, (err, files) => {
              if (err) {
                response = {type: 'list', success: false, error: chalk.red('Error reading notes')};
                cb(response, undefined);
              } else {
                files.forEach((file: any) => {
                  const json = require(`src/app/notas/${user}/${file}`);
                  notesArray.push(json);
                });
                if (notesArray.length > 0) {
                  response = {
                    type: 'list',
                    success: true,
                    notes: notesArray,
                  };

                  cb(undefined, response);
                } else {
                  response = {type: 'list', success: false, error: chalk.red('No notes found')};
                  cb(response, undefined);
                }
              }
            });
          }
        });
      };
    });
  };
}
