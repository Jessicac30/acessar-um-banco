import { NextApiRequest, NextApiResponse } from 'next'
import { ControleEditora } from '../../../classes/controle/ControleEditora'

const controleEditora = new ControleEditora()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { codEditora } = req.query

        switch (req.method) {
            case 'GET':
                const nomeEditora = controleEditora.getNomeEditora(Number(codEditora))
                res.status(200).json({ nome: nomeEditora })
                break
            default:
                res.setHeader('Allow', ['GET'])
                res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (e) {
        res.status(500).json({ statusCode: 500, message: onmessage })
    }
}



