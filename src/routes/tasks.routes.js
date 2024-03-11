const { Router } = require('express');
const TaskController = require('../controllers');
const tasksRouter = Router();

// tasksRouter.post('/', TaskController.sendTask);
// tasksRouter.get('/', TaskController.sendTask); // TODO

// tasksRouter.get('/:id', TaskController.sendTask); // TODO
// tasksRouter.put('/:id', TaskController.sendTask); // TODO
// tasksRouter.patch('/:id', TaskController.sendTask); // TODO

module.exports = tasksRouter;
