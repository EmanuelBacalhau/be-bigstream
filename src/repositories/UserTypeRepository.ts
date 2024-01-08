import { CreateUserTypeInterface } from '../interfaces/user-type/CreateUserTypeInterface';
import { GetUserTypeInterface } from '../interfaces/user-type/GetUserTypeInterface';
import { UpdateUserTypeInterface } from '../interfaces/user-type/UpdateUserTypeInterface';

import { prisma } from '../libs/prisma';

class UserRepositoryClient {
  async findAll() {
    const user_types = await prisma.userType.findMany();

    return user_types;
  }

  async create ({ name }: CreateUserTypeInterface) {
    await prisma.userType.create({
      data: {
        name
      }
    });
  }

  async findByIdOrName({ user_type_id, name }: GetUserTypeInterface) {
    const user_type = await prisma.userType.findUnique({
      where: {
        id: user_type_id,
        name
      }
    });

    return user_type;
  }

  async update({ name, user_type_id }: UpdateUserTypeInterface) {
    await prisma.userType.update({
      where: {
        id: user_type_id
      },
      data: {
        name
      }
    });
  }

  async delete({ user_type_id }: GetUserTypeInterface) {
    await prisma.userType.delete({
      where: {
        id: user_type_id
      }
    });
  }
}

export default new UserRepositoryClient();
