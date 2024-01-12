import { Request, Response } from 'express';
import ExerciseService from '../services/ExerciseService';

class ExerciseController {
  async index(req: Request, res: Response) {
    const exercises = await ExerciseService.index();

    return res.status(200).json(exercises);
  }
}

export default new ExerciseController();
