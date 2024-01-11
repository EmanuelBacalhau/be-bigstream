import { CreateTypeOfTrainingInterface } from '../interfaces/typeOfTraining/CreateTypeOfTrainingInterface';
import { GetTypeOfTrainingInterface } from '../interfaces/typeOfTraining/GetTypeOfTrainingInterface';
import { UpdateTypeOfTrainingInterface } from '../interfaces/typeOfTraining/UpdateTypeOfTrainingInterface';
import { prisma } from '../libs/prisma';

class TypeOfTrainingRepository {
  async findAll() {
    const types = await prisma.typeOfTraining.findMany();

    return types;
  }

  async create({ name }: CreateTypeOfTrainingInterface) {
    await prisma.typeOfTraining.create({
      data: {
        name
      }
    });
  }

  async findUnique({ name, type_id }: GetTypeOfTrainingInterface) {
    const typeOfTraining = await prisma.typeOfTraining.findUnique({
      where: {
        name,
        id: type_id
      }
    });

    return typeOfTraining;
  }

  async update({ name, type_id }: UpdateTypeOfTrainingInterface) {
    await prisma.typeOfTraining.update({
      where: {
        id: type_id
      },
      data: {
        name
      }
    });
  }

  async delete({ type_id }: GetTypeOfTrainingInterface) {
    await prisma.typeOfTraining.delete({
      where: {
        id: type_id
      }
    });
  }
}

export default new TypeOfTrainingRepository();
