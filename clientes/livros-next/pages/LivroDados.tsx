import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import { ControleLivros } from '../classes/controle/ControleLivros';
import { ControleEditora } from '../classes/controle/ControleEditora';

interface Livro {
  codigo: string;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: string;
}

const controleLivros = new ControleLivros();

export default function LivroDados() {
  const router = useRouter();
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState("");
  const [opcoes, setOpcoes] = useState<ControleEditora[]>([]);
  const controleEditora = new ControleEditora();

  useEffect(() => {
    const editoras = controleEditora.getEditoras();
    setOpcoes(editoras);
  }, []);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(event.target.value);
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const livro: Livro = {
      codigo: "",
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora,
    };

    controleLivros.incluir(livro)
      .then(() => router.push('/LivroLista'));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LivroDados | Loja Next</title>
        <meta name="description" content="LivroDados Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.navbar}>
        <Menu />
      </header>

      <main className={styles.main}>
        <h2 className={styles.blackText}>Dados do Livro</h2>
        <form
          onSubmit={incluir}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            maxWidth: '300px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label htmlFor="titulo" className={styles.blackText}>Título:</label>
            <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label htmlFor="resumo" className={styles.blackText}>Resumo:</label>
            <textarea id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} rows={3} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label htmlFor="autores" className={styles.blackText}>Autores:</label>
            <textarea id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label htmlFor="editora" className={styles.blackText}>Editora:</label>
            <select value={codEditora} onChange={tratarCombo}>
              {opcoes.map((editora, index) => (
                <option key={index} value={editora.codEditora}>{editora.nome}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <button type="submit" style={{ width: '100px' }}>Salvar Dados</button>
          </div>
        </form>
      </main>
    </div>
  );
}
