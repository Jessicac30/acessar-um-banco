import { useState, useEffect } from "react";
import { ControleLivros } from "./controle/ControleLivros.ts";
import { ControleEditora } from "./controle/ControleEditora.ts";
import './LivroLista.css';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const autoresList = livro.autores.map((autor, index) => (
    <li key={index}>{autor}</li>
  ));

  return (
    <tr>
      <td>
        <div className="livro-info">
          <h3>{livro.titulo}</h3>
          <button onClick={() => excluir(livro.codigo)} className="excluir">Excluir</button>
        </div>
      </td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>{autoresList}</ul>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    async function carregaLivros() {
      const livros = await controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    }
    if (!carregado) {
      carregaLivros();
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo)
      .then(() => setCarregado(false));
  };

  const linhasLivros = livros.map((livro, index) => (
    <LinhaLivro
      key={livro.codigo}
      livro={livro}
      excluir={excluir}
      className={index === 0 ? 'table-header' : ''}
    />
  ));

  return (
    <main style={{textAlign: "left"}}>
      <h1>Catálogo de livros</h1>
      <table>
        <thead>
          <tr>
            <th className="table-header">Título</th>
            <th className="table-header">Editora</th>
            <th className="table-header">Resumo</th>
            <th className="table-header">Autores</th>
          </tr>
        </thead>
        <tbody>{linhasLivros}</tbody>
      </table>
    </main>
  );
}