import { Router } from 'express';
import UserTypeController from './controllers/UserTypeController';
import UserController from './controllers/UserController';

export const router = Router();

// UserType
router.get('/user-types', UserTypeController.index);
router.post('/user-types', UserTypeController.store);
router.get('/user-types/:id', UserTypeController.show);
router.patch('/user-types/:id', UserTypeController.update);
router.delete('/user-types/:id', UserTypeController.delete);

// User
router.get('/users', UserController.index);
router.post('/users', UserController.store);
