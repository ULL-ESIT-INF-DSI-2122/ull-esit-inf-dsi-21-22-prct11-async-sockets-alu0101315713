/**
 * @description Crea una nota que se guardará en un archivo JSON
 */
export class Nota {
  private libroNotas: Nota[] = [];
  /**
   * @param titulo titulo de la nota
   * @param cuerpo mensaje de la nota
   * @param color color de la nota
   * @param id id de la nota
   */
  constructor(
        public titulo: string,
        public cuerpo: string,
        public color: string,
        public id?: number,
  ) {}
  /**
   * @returns retorna el titulo de la nota
   */
  getTitulo(): string {
    return this.titulo;
  }
  /**
   * @returns retorna el mensaje de la nota
   */
  getCuerpo(): string {
    return this.cuerpo;
  }
  /**
   * @returns retorna el color de la nota
   */
  getColor(): string {
    return this.color;
  }
  /**
   * @returns retonar la id de la nota en caso de que exista
   */
  getId(): number|undefined {
    return this.id;
  }
  /**
   * @param titulo titulo de la nota
   */
  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }
  /**
   * @param cuerpo mensaje de la nota
   */
  setCuerpo(cuerpo: string): void {
    this.cuerpo = cuerpo;
  }
  /**
   * @param color color de la nota
   */
  setColor(color: string): void {
    this.color = color;
  }
  /**
   * @param id id de la nota
   */
  setId(id: number): void {
    this.id = id;
  }
  /**
   * @param notas array de notas
   */
  saveNotas(notas: Nota[]): void {
    notas.push(this);
  }
  /**
   * @param notas array de notas
   * @returns las notas guardadas
   */
  static getNotas(notas: Nota[]): Nota[] {
    return notas;
  }
  /**
   * Elimina una nota del array de notas
   * @param nota nota existente
   */
  static deleteNota(nota: Nota): void {
    const index = nota.libroNotas.indexOf(nota);
    nota.libroNotas.splice(index, 1);
  }
}
