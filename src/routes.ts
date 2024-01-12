import { Router } from 'express';
import UserController from './controllers/UserController';
import TypeOfTrainingController from './controllers/TypeOfTrainingController ';
import ExerciseController from './controllers/ExerciseController';

export const router = Router();

// User
router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.get('/users/:id', UserController.show);
router.patch('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

// TypeOfTraining
router.get('/typesOfTraining', TypeOfTrainingController.index);
router.post('/typesOfTraining', TypeOfTrainingController.store);
router.get('/typesOfTraining/:id', TypeOfTrainingController.show);
router.patch('/typesOfTraining/:id', TypeOfTrainingController.update);
router.delete('/typesOfTraining/:id', TypeOfTrainingController.delete);

// Exercise
router.get('/exercises', ExerciseController.index);
