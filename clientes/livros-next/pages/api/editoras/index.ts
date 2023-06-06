import { NextApiRequest, NextApiResponse } from 'next'
import { ControleEditora } from '../../../classes/controle/ControleEditora'

const controleEditora = new ControleEditora()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method) {
            case 'GET':
                const editoras = controleEditora.getEditoras()
                res.status(200).json(editoras)
                break
            default:
                res.setHeader('Allow', ['GET'])
                res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (e) {
        res.status(500).json({ statusCode: 500, message: e.message })
    }
}