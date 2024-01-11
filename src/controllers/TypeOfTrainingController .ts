import { Request, Response } from 'express';
import TypeOfTrainingService from '../services/TypeOfTrainingService';
import { z } from 'zod';

class TypeOfTrainingController {
  async index(req: Request, res: Response) {
    const types = await TypeOfTrainingService.index();

    return res.status(200).json(types);
  }

  async store(req: Request, res: Response) {
    const TypeOfTrainingSchema = z.object({
      name: z.string().min(1)
    });

    const { name } = TypeOfTrainingSchema.parse(req.body);

    await TypeOfTrainingService.store({ name });

    return res.status(201).end();
  }
}

export default new TypeOfTrainingController();
