module.exports = class TaskController {
  static async sendTask(req, res) {
    res.status(201).json({
      sucess: true,
      message: req.body,
    });
  }
};
