import { Request, Response } from 'express';
import UserTypeService from '../services/UserTypeService';
import { z } from 'zod';
import UserTypeRepository from '../repositories/UserTypeRepository';

class UserTypeController {
  async index(req: Request, res: Response) {
    const user_types = await UserTypeService.index();

    return res.status(200).json(user_types);
  }

  async store(req: Request, res: Response) {
    const UserTypeSchema = z.object({
      name: z.string().min(1)
    });

    const { name } = UserTypeSchema.parse(req.body);

    await UserTypeService.store({ name });

    return res.status(201).end();
  }

  async show(req: Request, res: Response) {
    const UserTypeSchema = z.object({
      id: z.string().cuid()
    });

    const { id } = UserTypeSchema.parse(req.params);

    const userType = await UserTypeService.show({ user_type_id: id });

    return res.status(200).json(userType);
  }

  async update(req: Request, res: Response) {
    const UserTypeParams = z.object({
      id: z.string().cuid()
    });

    const UserTypeSchema = z.object({
      name: z.string().min(1)
    });

    const { id } = UserTypeParams.parse(req.params);

    const { name } = UserTypeSchema.parse(req.body);

    await UserTypeService.update({ user_type_id: id, name });

    return res.status(204).end();
  }

  async delete(req: Request, res: Response) {
    const UserTypeParams = z.object({
      id: z.string().cuid('teste')
    });

    const { id } = UserTypeParams.parse(req.params);

    await UserTypeRepository.delete({ user_type_id: id });

    return res.status(204).end();
  }
}

export default new UserTypeController();
