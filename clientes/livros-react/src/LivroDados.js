import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros.ts';
import { ControleEditora } from './controle/ControleEditora.ts';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const [nomeEditora, setNomeEditora] = useState(opcoes[0].text);
  const navigate = useNavigate();

  const tratarCombo = (event) => {
    const selectedOption = opcoes.find((opcao) => opcao.value === event.target.value);
    setCodEditora(event.target.value);
    setNomeEditora(selectedOption.text);
  };

  const incluir = (event) => {
    event.preventDefault();
    const livro = {
      codigo: '',
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };
    controleLivro.incluir(livro)
      .then(() => navigate('/'));
  };

  return (
    <main>
      <h2>Dados do Livro</h2>
      <form onSubmit={incluir} style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', maxWidth: '300px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="titulo" style={{ flex: '0 0 100px', textAlign: 'right', marginRight: '10px' }}>Título:</label>
          <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} style={{ flex: '1' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="resumo" style={{ flex: '0 0 100px', textAlign: 'right', marginRight: '10px' }}>Resumo:</label>
          <textarea id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} rows="3" style={{ flex: '1' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="autores" style={{ flex: '0 0 100px', textAlign: 'right', marginRight: '10px' }}>Autores:</label>
          <textarea id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} style={{ flex: '1' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <label htmlFor="editora" style={{ textAlign: 'right', marginRight: '10px' }}>Editora:</label>
          <select id="editora" value={codEditora} onChange={tratarCombo} style={{ flex: '1' }}>
            {opcoes.map((opcao, index) => (
              <option key={index} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <button type="submit" style={{ width: '100px' }}>Salvar Dados</button>
        </div>
      </form>
    </main>
  );
};

export default LivroDados;
