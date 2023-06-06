import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import { ControleEditora } from '../classes/controle/ControleEditora';
import styles from '../styles/LinhaLivro.module.css';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  const autoresList = livro.autores.map((autor, index) => (
    <li key={index}>{autor}</li>
  ));

  return (
    <tr>
      <td>
        <div className={styles.livroInfo}>
          <h3>{livro.titulo}</h3>
          <button onClick={() => excluir(livro.codigo)} className={styles.excluir}>Excluir</button>
        </div>
      </td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>{autoresList}</ul>
      </td>
    </tr>
  );
};
