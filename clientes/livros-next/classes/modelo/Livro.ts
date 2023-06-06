export class Livro {
  codigo: string | null;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;

  constructor(
    codigo: string | null,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}




  