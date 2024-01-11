import { MyError } from '../errors/MyError';
import { CreateTypeOfTrainingInterface } from '../interfaces/typeOfTraining/CreateTypeOfTrainingInterface';
import { GetTypeOfTrainingInterface } from '../interfaces/typeOfTraining/GetTypeOfTrainingInterface';
import { UpdateTypeOfTrainingInterface } from '../interfaces/typeOfTraining/UpdateTypeOfTrainingInterface';
import TypeOfTrainingRepository from '../repositories/TypeOfTrainingRepository';

class TypeOfTrainingService {
  async index() {
    const types = await TypeOfTrainingRepository.findAll();

    return types;
  }

  async store({ name }: CreateTypeOfTrainingInterface) {
    await TypeOfTrainingRepository.create({ name });
  }

  async show({ type_id }: GetTypeOfTrainingInterface) {
    const type = await TypeOfTrainingRepository.findUnique({ type_id });

    if (!type) throw new MyError('Type of training not found', 200);

    return type;
  }

  async update({ type_id, name }: UpdateTypeOfTrainingInterface) {
    const typeExists = await TypeOfTrainingRepository.findUnique({ type_id });

    if (!typeExists) throw new MyError('Type of training not found', 200);

    const nameInUse = await TypeOfTrainingRepository.findUnique({ name });

    if (nameInUse) throw new MyError('Name in use', 409);

    await TypeOfTrainingRepository.update({ name, type_id });
  }
}

export default new TypeOfTrainingService();
