import { MyError } from '../errors/MyError';
import { CreateUserTypeInterface } from '../interfaces/user-type/CreateUserTypeInterface';
import { GetUserTypeInterface } from '../interfaces/user-type/GetUserTypeInterface';
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

  async show({ user_type_id }: GetUserTypeInterface) {
    const userType = await UserTypeRepository.findByIdOrName({ user_type_id });

    if (!userType) throw new MyError('User type not found', 204);

    return userType;
  }
}

export default new UserTypeService();
