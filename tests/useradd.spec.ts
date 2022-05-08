import 'mocha';
import {expect} from 'chai';
// import * as fs from 'fs';

import {AddUser} from '../src/app/opciones/adduser';
import {ResponseType} from '../src/app/type';
import chalk from 'chalk';

const addNote = new AddUser();
let response: ResponseType = {
  type: 'add',
  success: false,
};

describe('User Add Test', () => {
  // Funciona
  it('No ha incluido ningún nombre de usuario', (done) => {
    addNote.addUserCallback('', (err, _) => {
      response = {type: 'userAdd', success: false, error: chalk.red('No ha incluido ningún nombre de usuario')};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
  it('Ya existe ese usuario', (done) => {
    addNote.addUserCallback('prueba', (error, _) => {
      response = {type: 'userAdd', success: false, error: chalk.red('Ese usuario ya existe')};
      if (error) {
        expect(error).to.be.eql(response);
        done();
      }
    });
  });
  it('Usuario añadido correctamente', (done) => {
    addNote.addUserCallback('felipe', (error, _) => {
      response = {type: 'userAdd', success: true, error: chalk.green('Usuario añadido correctamente')};
      if (error) {
        expect(error).to.be.eql(response);
        done();
      }
    });
  });
});
