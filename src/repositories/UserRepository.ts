import { CreateUserInterface } from '../interfaces/user/CreateUserInterface';
import { GetUserInterface } from '../interfaces/user/GetUserInterface';
import { UpdateUserInterface } from '../interfaces/user/UpdateUserInterface';
import { prisma } from '../libs/prisma';

class UserRepository {
  async findAll() {
    const users = await prisma.user.findMany({
      include: {
        userType: {
          select: {
            name: true
          }
        }
      }
    });

    return users;
  }

  async create(data: CreateUserInterface) {
    await prisma.user.create({
      data
    });
  }

  async findUnique({ email, phone, user_id }: GetUserInterface) {
    const user = await prisma.user.findUnique({
      where: {
        id: user_id,
        email,
        phone
      }
    });

    return user;
  }

  async update({ user_id, ...data }: UpdateUserInterface) {
    await prisma.user.update({
      where: {
        id: user_id
      },
      data
    });
  }

  async delete({ user_id }: GetUserInterface) {
    await prisma.user.delete({
      where: {
        id: user_id
      }
    });
  }
}

export default new UserRepository();
