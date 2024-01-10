import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  async index(req: Request, res: Response) {
    const users = await UserService.index();

    return res.status(200).json(users);
  }
}

export default new UserController();
