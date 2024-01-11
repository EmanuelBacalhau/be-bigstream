import { Request, Response } from 'express';
import TypeOfTrainingService from '../services/TypeOfTrainingService';

class TypeOfTrainingController {
  async index(req: Request, res: Response) {
    const types = await TypeOfTrainingService.index();

    return res.status(200).json(types);
  }
}

export default new TypeOfTrainingController();
