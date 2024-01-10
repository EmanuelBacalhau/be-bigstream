import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { z } from 'zod';

class UserController {
  async index(req: Request, res: Response) {
    const users = await UserService.index();

    return res.status(200).json(users);
  }

  async store(req: Request, res: Response) {
    const UserSchema = z.object({
      first_name: z.string().min(1),
      last_name:  z.string().min(1),
      phone:      z.string().min(1),
      email:      z.string().email(),
      password:   z.string().min(8),
      weight:     z.number(),
      height:     z.number(),
      user_type_id: z.string().cuid()
    });

    const data = UserSchema.parse(req.body);

    await UserService.store(data);

    return res.status(201).end();
  }
}

export default new UserController();
