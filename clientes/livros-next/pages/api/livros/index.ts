import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(controleLivro.obterLivros());
  } else if (req.method === 'POST') {
    controleLivro.incluir(req.body);
    res.status(200).json({ message: 'Livro adicionado com sucesso' });
  } else {
    res.status(405).json({ message: 'Método não suportado' });
  }
};


