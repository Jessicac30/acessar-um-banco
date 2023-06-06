import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import LivroLista from './LivroLista.js';
import LivroDados from './LivroDados.js';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ backgroundColor: 'black', padding: '0.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Link style={{ color: 'white', textDecoration: 'none', marginRight: '1rem', fontSize: '0.6rem' }} to="/">Catálogo</Link>
          <Link style={{ color: 'white', textDecoration: 'none', fontSize: '0.6rem' }} to="/novo">Novo</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/novo" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


