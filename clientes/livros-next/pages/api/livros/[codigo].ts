import { NextApiRequest, NextApiResponse } from 'next'
import { ControleLivros } from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { codigo } = req.query

        switch (req.method) {
            case 'DELETE':
                controleLivro.excluir(Number(codigo))
                res.status(200).json({ message: 'Livro excluído com sucesso' })
                break
            default:
                res.setHeader('Allow', ['DELETE'])
                res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (e) {
        res.status(500).json({ statusCode: 500, message: onmessage })
    }
}

