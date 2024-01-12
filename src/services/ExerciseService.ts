import ExerciseRepository from '../repositories/ExerciseRepository';

class ExerciseService {
  async index() {
    const exercises = await ExerciseRepository.findAll();

    return exercises;
  }
}

export default new ExerciseService();
