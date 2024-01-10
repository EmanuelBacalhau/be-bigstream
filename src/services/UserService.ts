import { MyError } from '../errors/MyError';
import { CreateUserInterface } from '../interfaces/user/CreateUserInterface';
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

    await UserRepository.create(data);
  }
}

export default new UserService();
