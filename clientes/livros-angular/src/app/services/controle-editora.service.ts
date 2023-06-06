import { Injectable } from '@angular/core';
import { Editora } from '../model/editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  private editoras: Array<Editora> = [
    { codEditora: 1, nome: "Rocco" },
    { codEditora: 2, nome: "Editora José Olympio" },
    { codEditora: 3, nome: "Agir" },
  ];

  constructor() { }

  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editoraEncontrada?.nome || "";
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}

