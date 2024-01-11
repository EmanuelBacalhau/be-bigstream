import { MyError } from '../errors/MyError';
import { CreateTypeOfTrainingInterface } from '../interfaces/typeOfTraining/CreateTypeOfTrainingInterface';
import { GetTypeOfTrainingInterface } from '../interfaces/typeOfTraining/GetTypeOfTrainingInterface';
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
}

export default new TypeOfTrainingService();
