import { CreateExerciseInterface } from '../interfaces/exercise/CreateExerciseInterface';
import { GetExerciseInterface } from '../interfaces/exercise/GetExerciseInterface';
import { UpdateExerciseInterface } from '../interfaces/exercise/UpdateExerciseInterface';
import { prisma } from '../libs/prisma';

class ExerciseRepository {
  async findAll() {
    const exercises = await prisma.exercise.findMany();

    return exercises;
  }

  async store(data: CreateExerciseInterface) {
    await prisma.exercise.create({
      data
    });
  }

  async findUnique({ exercise_id, name }: GetExerciseInterface) {
    const exercise = await prisma.exercise.findUnique({
      where: {
        id: exercise_id,
        name
      }
    });

    return exercise;
  }

  async update({ exercise_id, ...data }: UpdateExerciseInterface) {
    await prisma.exercise.update({
      where: {
        id: exercise_id
      },
      data
    });
  }

  async delete({ exercise_id }: GetExerciseInterface) {
    await prisma.exercise.delete({
      where: {
        id: exercise_id
      }
    });
  }
}

export default new ExerciseRepository();
