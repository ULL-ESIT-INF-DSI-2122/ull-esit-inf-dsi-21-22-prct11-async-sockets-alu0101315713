import 'mocha';
import {expect} from 'chai';
import chalk from 'chalk';
import {ListNotes} from '../src/app/opciones/listnote';
import {ResponseType} from '../src/app/type';
// import * as fs from 'fs';

const listNote = new ListNotes();
let response: ResponseType = {
  type: 'add',
  success: false,
};

describe('List Note test', () => {
  it('Ese usuario no existe', (done) => {
    listNote.listNoteCallback('pruebas', (err, _) => {
      response = {type: 'list', success: false, error: chalk.red('Ese usuario no existe')};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
});
