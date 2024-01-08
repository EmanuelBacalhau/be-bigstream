import { Request, Response } from 'express';
import UserTypeService from '../services/UserTypeService';

class UserTypeController {
  async index(req: Request, res: Response) {
    const user_types = await UserTypeService.index();

    return res.status(200).json(user_types);
  }
}

export default new UserTypeController();
