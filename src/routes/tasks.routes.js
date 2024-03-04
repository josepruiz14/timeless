import { Router } from 'express';
import { TaskController } from '../controllers/index.js';

export const tasksRouter = Router();

tasksRouter.post('/', TaskController.sendTask);
tasksRouter.get('/', TaskController.sendTask); // TODO

tasksRouter.get('/:id', TaskController.sendTask); // TODO
tasksRouter.put('/:id', TaskController.sendTask); // TODO
tasksRouter.patch('/:id', TaskController.sendTask); // TODO
