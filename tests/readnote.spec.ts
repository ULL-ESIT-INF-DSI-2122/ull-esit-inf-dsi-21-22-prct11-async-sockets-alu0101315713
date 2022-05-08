import 'mocha';
import {expect} from 'chai';
import chalk from 'chalk';
import {ReadNotes} from '../src/app/opciones/readnote';
import {ResponseType} from '../src/app/type';

const readNote = new ReadNotes();
let response: ResponseType = {
  type: 'add',
  success: false,
};

describe('Read Note Test', () => {
  it('Esa nota no existe', (done) => {
    readNote.readNoteCallback('felipe', 'felipe', (err, _) => {
      response = {type: 'read', success: false, error: chalk.red('Esa nota no existe')};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
});
