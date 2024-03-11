const Router = require('express');
const recordsRouter = Router();

recordsRouter.post('/', (req, res) => {
  res.status(201).json({
    sucess: true,
    message: req.body,
  });
});

module.exports = recordsRouter;
