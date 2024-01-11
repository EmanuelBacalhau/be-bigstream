import { CreateTypeOfTrainingInterface } from '../interfaces/typeOfTraining/CreateTypeOfTrainingInterface';
import TypeOfTrainingRepository from '../repositories/TypeOfTrainingRepository';

class TypeOfTrainingService {
  async index() {
    const types = await TypeOfTrainingRepository.findAll();

    return types;
  }

  async store({ name }: CreateTypeOfTrainingInterface) {
    await TypeOfTrainingRepository.create({ name });
  }
}

export default new TypeOfTrainingService();
