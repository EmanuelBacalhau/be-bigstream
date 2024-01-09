import { MyError } from '../errors/MyError';
import { CreateUserTypeInterface } from '../interfaces/user-type/CreateUserTypeInterface';
import { GetUserTypeInterface } from '../interfaces/user-type/GetUserTypeInterface';
import { UpdateUserTypeInterface } from '../interfaces/user-type/UpdateUserTypeInterface';
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

    if (!userType) throw new MyError('User type not found', 200);

    return userType;
  }

  async update({ user_type_id, name }: UpdateUserTypeInterface) {
    const userTypeExists = await UserTypeRepository.findByIdOrName({ user_type_id });

    if (!userTypeExists) throw new MyError('User type not found', 200);

    const nameInUse = await UserTypeRepository.findByIdOrName({ name });

    if (nameInUse) throw new MyError('Is name in use', 409);

    await UserTypeRepository.update({
      user_type_id,
      name
    });
  }

  async delete({ user_type_id }: GetUserTypeInterface) {
    const userTypeExists = await UserTypeRepository.findByIdOrName({ user_type_id });

    if (!userTypeExists) throw new MyError('User type not found', 200);

    await UserTypeRepository.delete({ user_type_id });
  }
}

export default new UserTypeService();
