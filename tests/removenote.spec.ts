import 'mocha';
import {expect} from 'chai';
import {RemoveNote} from '../src/app/opciones/removenote';
import {ResponseType} from '../src/app/type';
import chalk from 'chalk';

const removeNote = new RemoveNote();
let response: ResponseType = {
  type: 'add',
  success: false,
};

describe('Remove Note Test', () => {
  it('Esa nota no existe', (done) => {
    removeNote.removeNoteCallback('felipe', 'felipe', (err, _) => {
      if (err) {
        response = {type: 'remove', success: false, error: chalk.red('Esa nota no existe')};
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
});
