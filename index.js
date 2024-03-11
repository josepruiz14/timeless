const express = require('express');
const cors = require('cors');
const { json } = require('express');
const { tasksRouter, recordsRouter, usersRouter } = require('./src/routes');

try {
  const app = express();
  app.disable('x-powered-by');

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({
      success: true,
      message: 'Timelezz Up!',
    });
  });

  // Define routes using routers
  app.use('/tasks', tasksRouter);
  app.use('/users', usersRouter);
  app.use('/records', recordsRouter);

  app.use((req, res) => {
    res.status(404).json({
      status: false,
      message: 'Unable to find service',
    });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening for requests on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
