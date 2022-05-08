import * as fs from 'fs';
import {ResponseType} from '../type';
import chalk from 'chalk';
/**
 * Class to Modify Notes
 */
export class ModifyNote {
  constructor() {
  }

  /**
   * This function modifies an existing note
   * @param user User name
   * @param title Note title
   * @param body Note body
   * @returns Error or correct response
   */
  modifyNoteCallback = (user: string, title: string, body: string, cb: (err: ResponseType | undefined, correct: ResponseType | undefined) => void) => {
    let response: ResponseType = {
      type: 'add',
      success: false,
    };
    fs.access(`src/app/notas/${user}/${title}.json`, fs.constants.F_OK, (err) => {
      if (err) {
        response = {type: 'update', success: false, error: chalk.red('Note not found')};
        cb(response, undefined);
      } else {
        fs.readFile(`src/app/notas/${user}/${title}.json`, (err)=> {
          const json = require(`/src/app/notas/${user}/${title}.json`);
          json.body = body;

          fs.writeFile(`src/app/notas/${user}/${title}.json`, JSON.stringify(json, null, 2), (err) => {
            if (err) {
              response = {type: 'update', success: false, error: chalk.red('Error updating note')};
              cb(response, undefined);
            } else {
              response = {
                type: 'update',
                success: true,
                notes: [json],
              };
              cb(undefined, response);
            }
          });
        });
      }
    });
  };
};

