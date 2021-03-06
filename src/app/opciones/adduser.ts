import * as fs from 'fs';
import {ResponseType} from '../type';
import chalk from 'chalk';

/**
 * Class to Add users
 */
export class AddUser {
  constructor() {}

  /**
   * This function adds a new directory
   */
  addUserCallback = (user: string, cb: (err: ResponseType | undefined, correct: ResponseType | undefined) => void) => {
    let response: ResponseType = {
      type: 'add',
      success: false,
    };

    if (user === '') {
      response = {type: 'userAdd', success: false, error: chalk.red('User not found')};
      cb(response, undefined);
    } else {
      /**
       * Check if the user directory exists
       */
      fs.mkdir(`src/app/notas/${user}`, (err) => {
        if (err) {
          response = {type: 'userAdd', success: false, error: chalk.red('User already exists')};
          cb(response, undefined);
        } else {
          response = {
            type: 'userAdd',
            success: true,
            user: `${user}`,
          };
          cb(undefined, response);
        }
      });
    }
  };
};
