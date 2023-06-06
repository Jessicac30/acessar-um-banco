const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ message: 'Livro adicionado com sucesso!' });
  } catch (error) {
    res.json({ message: 'Falha ao adicionar o livro', error });
  }
});

router.delete('/:codigo', async (req, res) => {
  try {
    await excluir(req.params.codigo);
    res.json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    res.json({ message: 'Falha ao excluir o livro', error });
  }
});

module.exports = router;
