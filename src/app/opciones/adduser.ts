/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import * as fs from 'fs';
import {ResponseType} from '../type';

/**
 * Class to Add Users to the Data Base
 */
export class AddUser {
  constructor() {}

  /**
   * This function adds a new directory to any user found on a json file
   */
  addUserCallback = (user: string, cb: (err: ResponseType | undefined, correct: ResponseType | undefined) => void) => {
    let response: ResponseType = {
      type: 'add',
      success: false,
    };

    if (user === '') {
      response = {type: 'userAdd', success: false, error: 'User not found'};
      cb(response, undefined);
    } else {
      fs.mkdir(`src/app/notas/${user}`, (err) => {
        if (err) {
          response = {type: 'userAdd', success: false, error: 'User already exists'};
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
