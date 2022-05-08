import * as fs from 'fs';
import {ResponseType} from '../type';
import chalk from 'chalk';

// /**
//  * Class to Add Notes
//  */
export class AddNote {
  constructor() {}

  /**
   * This function adds a note to any user directory
   * @param user User Name
   * @param title Note title
   * @param body Note body
   * @param noteColor Note color
   * @returns Error or correct response
   */
  addNoteCallback = (user: string, title: string, body: string, noteColor: string, cb: (err: ResponseType | undefined, correct: ResponseType | undefined) => void) => {
    let response: ResponseType = {
      type: 'add',
      success: false,
    };

    fs.access(`src/app/notas/${user}`, fs.constants.F_OK, (err) => {
      if (err) {
        response = {type: 'add', success: false, error: chalk.red('User not found')};
        cb(response, undefined);
      } else {
        // Se comprueba si la nota ya existe
        fs.access(`src/app/notas/${user}/${title}.json`, fs.constants.F_OK, (err) => {
          if (err) {
            const json: any = {
              title: title,
              body: body,
              color: noteColor,
            };
            fs.writeFile(`src/app/notas/${user}/${title}.json`, JSON.stringify(json, null, 2), (err) => {
              if (err) {
                response = {type: 'add', success: false, error: chalk.red('Error adding note')};
                cb(response, undefined);
              } else {
                response = {
                  type: 'add',
                  success: true,
                  notes: [json],
                };
                cb(undefined, response);
              }
            });
          } else {
            response = {type: 'add', success: false, error: chalk.red('Note already exists')};
            cb(response, undefined);
          }
        });
      }
    });
  };
};
