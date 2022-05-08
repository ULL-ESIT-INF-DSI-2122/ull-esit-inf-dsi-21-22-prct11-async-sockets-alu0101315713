/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import chalk from 'chalk';
import {ModifyNote} from '../src/app/opciones/modifyNote';
import {ResponseType} from '../src/app/type';

const modifyNote = new ModifyNote();
let response: ResponseType = {
  type: 'add',
  success: false,
};

describe('Modify Note Test', () => {
  it('Esa nota no existe', (done) => {
    modifyNote.modifyNoteCallback('felipe', 'felipe', 'prueba', (err, _) => {
      response = {type: 'update', success: false, error: chalk.red('Ese usuario no existe')};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
});
