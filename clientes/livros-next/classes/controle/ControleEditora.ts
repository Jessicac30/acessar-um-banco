import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  { codEditora: 1, nome: "Rocco" },
  { codEditora: 2, nome: "Editora José Olympio" },
  { codEditora: 3, nome: "Agir" },
];

class ControleEditora {
  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editoraEncontrada?.nome || "";
  }

  getEditoras(): Array<Editora> {
    return editoras;
  }
}

export { ControleEditora };