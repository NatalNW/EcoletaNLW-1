import { Request, Response, response } from 'express';
import knex from '../database/connection';

class PointsController {
    async index(req: Request, res: Response){
        const { city, uf, items } = req.query;

        const parsedItems = String(items).split(',').map(item => Number(item.trim()));

        const points = await knex('colectPoints')
            .join('pointsItems', 'colectPoints.id', '=', 'pointsItems.points_id')
            .whereIn('pointsItems.items_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('colectPoints.*');

        return res.json(points);
    }

    async show(req: Request, res: Response){
        const { id } = req.params;

        const point = await knex('colectPoints').where('id', id).first();

        if(!point){
            return res.status(400).json({ message: 'Point not found' });
        }

        const items = await knex('items').join('pointsItems', 'items.id', '=', 'pointsItems.items_id')
        .where('pointsItems.points_id', id).select('items.title')

        return res.json({ point, items });
    }

    async create(req: Request, res: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body;
    
        const trx = await knex.transaction();
        
        const point = {
            image: 'fake-one',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }

        const insertedIds = await trx('colectPoints').insert(point);
    
        const points_id = insertedIds[0];
    
        const pointsItems = items.map((items_id: number) =>{
            return {
                items_id,
                points_id
            };
        });
    
        await trx('pointsItems').insert(pointsItems);

        await trx.commit();
        
        return res.json({
            id: points_id, 
            ... point
        });
    }
}

export default PointsController;