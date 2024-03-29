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

  async show(req: Request, res: Response) {
    const TypeOfTrainingParams = z.object({
      id: z.string().cuid()
    });

    const { id } = TypeOfTrainingParams.parse(req.params);

    const type = await TypeOfTrainingService.show({ type_id: id });

    return res.status(200).json(type);
  }

  async update(req: Request, res: Response) {
    const TypeOfTrainingSchema = z.object({
      name: z.string().min(1)
    });

    const TypeOfTrainingParams = z.object({
      id: z.string().cuid()
    });

    const { name } = TypeOfTrainingSchema.parse(req.body);
    const { id } = TypeOfTrainingParams.parse(req.params);

    await TypeOfTrainingService.update({ name, type_id: id });

    return res.status(204).end();
  }

  async delete(req: Request, res: Response) {
    const TypeOfTrainingParams = z.object({
      id: z.string().cuid()
    });

    const { id } = TypeOfTrainingParams.parse(req.params);

    await TypeOfTrainingService.delete({ type_id: id });

    return res.status(200).end();
  }
}

export default new TypeOfTrainingController();
