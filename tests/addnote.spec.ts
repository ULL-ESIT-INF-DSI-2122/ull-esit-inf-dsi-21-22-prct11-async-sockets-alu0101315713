/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import chalk from 'chalk';
import {AddNote} from '../src/app/opciones/addnote';
import {ResponseType} from '../src/app/type';

const addNote = new AddNote();
let response: ResponseType = {
  type: 'add',
  success: false,
};

describe('Add Note Test', () => {
  // Funciona
  it('Ese usuario no existe', (done) => {
    addNote.addNoteCallback('pruebas', 'prueba3', 'Esto es una fiesta', 'red', (err, _) => {
      response = {type: 'add', success: false, error: chalk.red('Ese usuario no existe')};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
  it('Nota vacía', (done) => {
    addNote.addNoteCallback('felipe', '', 'Esto es una fiesta', 'marrón', (err, _) => {
      response = {type: 'add', success: false, error: chalk.red('No se puede crear una nota vacía')};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
  it('Ese color no existe', (done) => {
    addNote.addNoteCallback('felipe', 'prueba3', 'Esto es una fiesta', 'marrón', (err, _) => {
      response = {type: 'add', success: false,
        error: chalk.red('No se puede crear una nota si no se le indican un color, use: red, green, yellow o blue como colores')};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
  it('Nota creada correctamente', (done) => {
    addNote.addNoteCallback('felipe', 'prueba3', 'Esto es una fiesta', 'red', (err, _) => {
      response = {type: 'add', success: true, notes: [{title: 'prueba3', body: 'Esto es una fiesta', color: 'red'}]};
      if (err) {
        expect(err).to.be.eql(response);
        done();
      }
    });
  });
});
