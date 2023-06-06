import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container} style={{ backgroundColor: 'white' }}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Loja de livros com Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title} style={{ color: 'black' }}>
          Página Inicial
        </h1>
      </main>
    </div>
  );
}
