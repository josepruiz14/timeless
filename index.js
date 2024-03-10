const express = require('express');
const cors = require('cors');
const { tasksRouter, recordsRouter, usersRouter } = require('./src/routes/index.js');

try {
  const app = express();
  app.disable('x-powered-by');

  app.use(cors());
  app.use(json());

  app.get('/', (req, res) => {
    res.json({
      sucess: true,
      message: 'Timelezz Up!',
    });
  });
  app.use('/tasks', tasksRouter);
  app.use('/users', usersRouter);
  app.use('/tasks', recordsRouter);

  app.use((req, res) => {
    res.status(404).json({
      status: false,
      message: 'Unable to find service',
    });
  });
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`${'listening for requests on port 3000'}`);
  });
} catch (error) {
  console.log(error);

}

