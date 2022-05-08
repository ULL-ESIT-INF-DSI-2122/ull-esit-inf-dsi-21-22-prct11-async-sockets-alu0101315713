/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import chalk from 'chalk';
import {Client} from '../src/app/client';
import {RequestType} from '../src/app/type';
import {ResponseType} from '../src/app/type';


const request: RequestType = {
  type: 'add',
  user: 'felipe'};

const addResponse: ResponseType = {
  type: 'add',
  success: true,
  notes: [{title: 'responseTest', body: 'Test', color: 'yellow'}],
};

const addUser: ResponseType = {
  type: 'userAdd',
  success: true,
  user: 'prueba',
};

const modify: ResponseType = {
  type: 'update',
  success: true,
  notes: [{title: 'responseTest', body: 'Test', color: 'yellow'}],
};

const remove: ResponseType = {
  type: 'remove',
  success: true,
  notes: [{title: 'responseTest', body: 'Test', color: 'yellow'}],
};

const list: ResponseType = {
  type: 'list',
  success: true,
  notes: [{title: 'responseTest', body: 'Test', color: 'yellow'}],
};

const read: ResponseType = {
  type: 'read',
  success: true,
  notes: [{title: 'responseTest', body: 'Test', color: 'yellow'}],
};

const FalloaddUser: ResponseType = {
  type: 'userAdd',
  success: false,
  error: `${chalk.red('Error')}`,
};

const FalloaddResponse: ResponseType = {
  type: 'add',
  success: false,
  error: `${chalk.red('Error')}`,
};

const Fallomodify: ResponseType = {
  type: 'update',
  success: false,
  error: `${chalk.red('Error')}`,
};

const Falloremove: ResponseType = {
  type: 'remove',
  success: false,
  error: `${chalk.red('Error')}`,
};

const Fallolist: ResponseType = {
  type: 'list',
  success: false,
  error: `${chalk.red('Error')}`,
};

const Falloread: ResponseType = {
  type: 'read',
  success: false,
  error: `${chalk.red('Error')}`,
};

const client = new Client(request);

describe('Response Test', () => {
  it('Añadir usuario', () => {
    expect(client.display(JSON.stringify(addUser))).to.be.equal(chalk.green(`El usuario prueba ha creado su directorio`));
  });
  it('Añadir respuesta', () => {
    expect(client.display(JSON.stringify(addResponse))).to.be.equal(chalk.green(`La nota responseTest ha sido creada de forma satisfactoria`));
  });
  it('Modificar respuesta', () => {
    expect(client.display(JSON.stringify(modify))).to.be.equal(chalk.green(`La nota responseTest ha sido modificada de forma satisfactoria`));
  });
  it('Eliminar respuesta', () => {
    expect(client.display(JSON.stringify(remove))).to.be.equal(chalk.green(`La nota responseTest ha sido eliminada de forma satisfactoria`));
  });
  it('Listar respuesta', () => {
    expect(client.display(JSON.stringify(list))).to.be.equal(`${chalk.yellow('responseTest')}` + '\n');
  });
  it('Leer respuesta', () => {
    expect(client.display(JSON.stringify(read))).to.be.equal(`Título: ${chalk.yellow('responseTest')} => Contenido: ${chalk.yellow('Test')}`);
  });
});

describe('Response Error Test', () => {
  it('Añadir usuario', () => {
    expect(client.display(JSON.stringify(FalloaddUser))).to.be.equal(chalk.red('Error'));
  });
  it('Añadir respuesta', () => {
    expect(client.display(JSON.stringify(FalloaddResponse))).to.be.equal(chalk.red('Error'));
  });
  it('Modificar respuesta', () => {
    expect(client.display(JSON.stringify(Fallomodify))).to.be.equal(chalk.red('Error'));
  });
  it('Eliminar respuesta', () => {
    expect(client.display(JSON.stringify(Falloremove))).to.be.equal(chalk.red('Error'));
  });
  it('Listar respuesta', () => {
    expect(client.display(JSON.stringify(Fallolist))).to.be.equal(chalk.red('Error'));
  });
  it('Leer respuesta', () => {
    expect(client.display(JSON.stringify(Falloread))).to.be.equal(chalk.red('Error'));
  });
});
