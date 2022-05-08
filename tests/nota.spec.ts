import {Nota} from '../src/ejercicio3/notas';
import "mocha";
import {expect} from "chai";

describe("Nota", () => {
  it("Debería crear una nota", () => {
    const nota = new Nota("Titulo", "Cuerpo", "Rojo");
    expect(nota.getTitulo()).to.equal("Titulo");
    expect(nota.getCuerpo()).to.equal("Cuerpo");
    expect(nota.getColor()).to.equal("Rojo");
  });
  it("Debería crear una nota con id", () => {
    const nota = new Nota("Titulo", "Cuerpo", "Rojo", 1);
    expect(nota.getId()).to.equal(1);
  });
  it("Debería guardar una nota", () => {
    const nota = new Nota("Titulo", "Cuerpo", "Rojo");
    const lib: Nota[] = [];
    nota.saveNotas(lib);
    expect(nota.getId()).to.equal(undefined);
  });
  it("Debería guardar varias Nota", () => {
    const nota1 = new Nota("Titulo1", "Cuerpo1", "Rojo");
    const nota2 = new Nota("Titulo2", "Cuerpo2", "Verde");
    const nota3 = new Nota("Titulo3", "Cuerpo3", "Azul");
    const lib: Nota[] = [];
    nota1.saveNotas(lib);
    nota2.saveNotas(lib);
    nota3.saveNotas(lib);
    expect(Nota.getNotas(lib)).to.deep.equal([nota1, nota2, nota3]);
  });
  it("Debería leer una nota", () => {
    const nota = new Nota("Titulo", "Cuerpo", "Rojo");
    nota.saveNotas([nota]);
    expect(Nota.getNotas([nota])).to.deep.equal([nota]);
  });
  it("Debería leer varias Nota", () => {
    const nota1 = new Nota("Titulo1", "Cuerpo1", "Rojo");
    const nota2 = new Nota("Titulo2", "Cuerpo2", "Verde");
    const nota3 = new Nota("Titulo3", "Cuerpo3", "Azul");
    const lib: Nota[] = [];
    nota1.saveNotas(lib);
    nota2.saveNotas(lib);
    nota3.saveNotas(lib);
    expect(Nota.getNotas([nota1, nota2, nota3])).to.deep.equal([nota1, nota2, nota3]);
    expect(Nota.getNotas(lib)).to.deep.equal([nota1, nota2, nota3]);
  });
  it("Debería actualizar una nota", () => {
    const nota = new Nota("Titulo", "Cuerpo", "Rojo");
    nota.saveNotas([nota]);
    nota.setTitulo("Titulo2");
    nota.setCuerpo("Cuerpo2");
    nota.setColor("Verde");
    expect(Nota.getNotas([nota])).to.deep.equal([nota]);
  });
  it("Debería eliminar una nota", () => {
    const nota = new Nota("Titulo", "Cuerpo", "Rojo");
    nota.saveNotas([nota]);
    Nota.deleteNota(nota);
    expect(Nota.getNotas([])).to.deep.equal([]);
  });
  it("Debería eliminar varias Nota", () => {
    const nota1 = new Nota("Titulo1", "Cuerpo1", "Rojo");
    const nota2 = new Nota("Titulo2", "Cuerpo2", "Verde");
    const nota3 = new Nota("Titulo3", "Cuerpo3", "Azul");
    const lib: Nota[] = [];
    nota1.saveNotas(lib);
    nota2.saveNotas(lib);
    nota3.saveNotas(lib);
    Nota.deleteNota(nota1);
    Nota.deleteNota(nota2);
    Nota.deleteNota(nota3);
    expect(Nota.getNotas([])).to.deep.equal([]);
  });
});

