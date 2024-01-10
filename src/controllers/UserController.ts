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

  async show(req: Request, res: Response) {
    const UserParams = z.object({
      id: z.string().cuid()
    });

    const { id } = UserParams.parse(req.params);

    const user = await UserService.show({ user_id: id });

    return res.status(200).json(user);
  }

  async update(req: Request, res: Response) {
    const UserSchema = z.object({
      first_name: z.string().min(1).optional(),
      last_name:  z.string().min(1).optional(),
      phone:      z.string().min(1).optional(),
      email:      z.string().email().optional(),
      password:   z.string().min(8).optional(),
      weight:     z.number().optional(),
      height:     z.number().optional(),
      user_type_id: z.string().cuid().optional()
    });

    const UserParams = z.object({
      id: z.string().cuid()
    });

    const data = UserSchema.parse(req.body);

    const { id } = UserParams.parse(req.params);

    await UserService.update({user_id: id, ...data});

    return res.status(204).end();
  }

  async delete(req: Request, res: Response) {
    const UserParams = z.object({
      id: z.string().cuid()
    });

    const { id } = UserParams.parse(req.params);

    await UserService.delete({ user_id: id });

    return res.status(204).end();
  }
}

export default new UserController();
