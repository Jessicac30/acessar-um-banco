import React, { useEffect, useState } from 'react';
import styles from '../styles/LivroLista.module.css';
import { Menu } from '../componentes/Menu';
import { ControleLivros } from '../classes/controle/ControleLivros';
import { ControleEditora } from '../classes/controle/ControleEditora';

interface Livro {
  codigo: string;
  titulo: string;
  resumo: string;
  codEditora: number; 
  autores: string[];
}

interface Editora {
  codEditora: number; 
  nome: string;
}

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora(); 

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo)
      .then(() => setCarregado(false));
  };

  useEffect(() => {
    if (!carregado) {
      controleLivros.obterLivros()
        .then((livros) => {
          setLivros(livros);
          setCarregado(true);
        });
    }
  }, [carregado]);

  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.titulo}>Catálogo de Livros</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <th className={styles.tableCell}>Título</th>
              <th className={styles.tableCell}>Resumo</th>
              <th className={styles.tableCell}>Editora</th>
              <th className={styles.tableCell}>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <tr key={index} className={index % 2 === 0 ? styles.destaqueCinza : styles.destaqueBranco}>
                <td className={styles.tituloCell}>
                  <div className={styles.tituloWrapper}>
                    <h3 className={styles.tituloLivro}>{livro.titulo}</h3>
                    <button onClick={() => excluir(livro.codigo)} className={styles.excluirButton}>Excluir</button>
                  </div>
                </td>
                <td className={styles.tableCell}>{livro.resumo}</td>
                <td className={styles.tableCell}>{controleEditora.getNomeEditora(livro.codEditora)}</td> {/* Agora exibe o nome da editora */}
                <td className={styles.tableCell}>{livro.autores.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
