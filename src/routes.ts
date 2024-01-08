import { Router } from 'express';
import UserTypeController from './controllers/UserTypeController';

export const router = Router();

// UserType
router.get('/user-types', UserTypeController.index);
router.post('/user-types', UserTypeController.store);
router.get('/user-types/:id', UserTypeController.show);
