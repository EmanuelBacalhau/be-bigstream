import { MyError } from '../errors/MyError';
import { CreateUserTypeInterface } from '../interfaces/user-type/CreateUserTypeInterface';
import UserTypeRepository from '../repositories/UserTypeRepository';

class UserTypeService {
  async index() {
    const user_types = await UserTypeRepository.findAll();
    return user_types;
  }

  async store({ name }: CreateUserTypeInterface) {
    const existsUserType = await UserTypeRepository.findByIdOrName({ name });

    if (existsUserType) throw new MyError('User type already exists', 409);

    await UserTypeRepository.create({ name });
  }
}

export default new UserTypeService();
