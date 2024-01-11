import TypeOfTrainingRepository from '../repositories/TypeOfTrainingRepository';

class TypeOfTrainingService {
  async index() {
    const types = await TypeOfTrainingRepository.findAll();

    return types;
  }
}

export default new TypeOfTrainingService();
