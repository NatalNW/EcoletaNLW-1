import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => { // PROCESSO DE TRANFORMAS INFORMAÇÕES SE CHAMA SERIALIZAÇÃO = DADOS DE UMA FROMA MAIS ACESSIVEL
            return {
                id: item.id,
                title: item.title,
                image_url: `http:10.0.0.107:3333/uploads/${item.image}`
            };
        });
    
        return res.json(serializedItems);
    }
}

export default ItemsController;