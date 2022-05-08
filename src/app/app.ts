
import * as yargs from 'yargs';
import {LScommand} from './comandos/lscommand';
import {MKDIRcommand} from './comandos/mkdircommand';
import {LSFILEScommand} from './comandos/lsfilescommand';
import {CATcommand} from './comandos/catcommand';
import {RMcommand} from './comandos/rmcommand';
import {MVcommand} from './comandos/mvcommand';
import {CPcommand} from './comandos/cpcommand';

import {ADDNote} from './comandos/add_note';
import {ModifyNote} from './comandos/modify_note';
import {RemoveNote} from './comandos/remove_note';
import {ReadNote} from './comandos/read_note';
import {ListNotescommand} from './comandos/list_note';
import {ADDuser} from './comandos/add_user';

export const ls = new LScommand();
export const mkdir = new MKDIRcommand();
export const lsfiles = new LSFILEScommand();
export const cat = new CATcommand();
export const rm = new RMcommand();
export const mv = new MVcommand();
export const cp = new CPcommand();

export const addNote = new ADDNote();
export const addUser = new ADDuser();
export const modifyNote = new ModifyNote();
export const removeNote = new RemoveNote();
export const readNote = new ReadNote();
export const listNote = new ListNotescommand();

ls.ls();
mkdir.mkdir();
lsfiles.lsfiles();
cat.cat();
rm.rm();
mv.mv();
cp.cp();

addNote.addNote();
addUser.adduser();
modifyNote.modifyNote();
removeNote.removeNote();
readNote.readNote();
listNote.list();

yargs.parse();
