import { MyError } from '../errors/MyError';
import { CreateUserInterface } from '../interfaces/user/CreateUserInterface';
import { GetUserInterface } from '../interfaces/user/GetUserInterface';
import { UpdateUserInterface } from '../interfaces/user/UpdateUserInterface';
import { encryptPassword } from '../libs/encryptPassword';
import UserRepository from '../repositories/UserRepository';
import UserTypeRepository from '../repositories/UserTypeRepository';

class UserService {
  async index() {
    const users = await UserRepository.findAll();

    return users;
  }

  async store(data: CreateUserInterface) {
    const userTypeExists = await UserTypeRepository.findByIdOrName({ user_type_id: data.user_type_id });

    if (!userTypeExists) throw new MyError('User type not exists', 409);

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

    const userTypeExists = data.user_type_id && await UserTypeRepository.findByIdOrName({ user_type_id: data.user_type_id });

    if (data.user_type_id && !userTypeExists) throw new MyError('User type not exists', 409);

    const emailInUse = data.email && await UserRepository.findUnique({ email: data.email });

    if (data.email && emailInUse) throw new MyError('Is email in use', 409);

    const phoneInUse = data.phone && await UserRepository.findUnique({ phone: data.phone });

    if (data.phone && phoneInUse) throw new MyError('Is phone in use', 409);

    data.password && (data.password = encryptPassword(data.password));

    await UserRepository.update({user_id, ...data});
  }
}

export default new UserService();
