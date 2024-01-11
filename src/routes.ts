import { Router } from 'express';
import UserController from './controllers/UserController';
import TypeOfTrainingController from './controllers/TypeOfTrainingController ';

export const router = Router();

// User
router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.get('/users/:id', UserController.show);
router.patch('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

// TypeOfTraining
router.get('/typesOfTraining', TypeOfTrainingController.index);
