/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import * as fs from 'fs';
import {Note, ResponseType} from '../type';

/**
 * Class to List Notes
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

    fs.access(`src/app/notas/${user}`, fs.constants.F_OK, (err) => {
      if (err) {
        response = {type: 'list', success: false, error: 'User not found'};
        cb(response, undefined);
      } else {
        fs.readdir(`src/app/notas/${user}`, (err, files: any) => {
          if (err) {
            response = {type: 'list', success: false, error: 'Error reading notes'};
            cb(response, undefined);
          } else {
            files.forEach((file: string) => {
              const json: any = require(`src/app/notas/${user}/${file}`);
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
              response = {type: 'list', success: false, error: 'No notes found'};
              cb(response, undefined);
            }
          }
        });
      }
    });
  };
};
