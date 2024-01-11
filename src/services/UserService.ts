import { MyError } from '../errors/MyError';
import { CreateUserInterface } from '../interfaces/user/CreateUserInterface';
import { GetUserInterface } from '../interfaces/user/GetUserInterface';
import { UpdateUserInterface } from '../interfaces/user/UpdateUserInterface';
import { encryptPassword } from '../libs/encryptPassword';
import UserRepository from '../repositories/UserRepository';

class UserService {
  async index() {
    const users = await UserRepository.findAll();

    return users;
  }

  async store(data: CreateUserInterface) {
    const emailInUse = await UserRepository.findUnique({ email: data.email });

    if (emailInUse) throw new MyError('Is email in use', 409);

    const phoneInUse = await UserRepository.findUnique({ phone: data.phone });

    if (phoneInUse) throw new MyError('Is phone in use', 409);

    data.password = encryptPassword(data.password);

    await UserRepository.create(data);
  }

  async show({ user_id }: GetUserInterface) {
    const user = await UserRepository.findUnique({ user_id });

    if (!user) throw new MyError('User not found', 200);

    return user;
  }

  async update({user_id, ...data}: UpdateUserInterface) {

    const userExists = await UserRepository.findUnique({ user_id });

    if (!userExists) throw new MyError('User not found', 200);

    const emailInUse = data.email && await UserRepository.findUnique({ email: data.email });

    if (data.email && emailInUse) throw new MyError('Is email in use', 409);

    const phoneInUse = data.phone && await UserRepository.findUnique({ phone: data.phone });

    if (data.phone && phoneInUse) throw new MyError('Is phone in use', 409);

    data.password && (data.password = encryptPassword(data.password));

    await UserRepository.update({user_id, ...data});
  }

  async delete({ user_id }: GetUserInterface) {
    const user = await UserRepository.findUnique({ user_id });

    if (!user) throw new MyError('User not found', 404);

    await UserRepository.delete({ user_id });
  }
}

export default new UserService();
