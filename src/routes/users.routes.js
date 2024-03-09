import { Router } from 'express';
import { UserController } from '../controllers/index.js';

export const usersRouter = Router();

usersRouter.get('/', UserController.getUsers);
// usersRouter.post('/', UserController.sendTask); // TODO

// usersRouter.get('/:id', UserController.sendTask); // TODO
// usersRouter.put('/:id', UserController.sendTask); // TODO
// usersRouter.patch('/:id', UserController.sendTask); // TODO
