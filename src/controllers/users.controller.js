import { User } from "../models/user.model"
export class UserController {
  static async getUsers(req, res) {
    let users = ''
    try {
      users = await User.findAll()
      if (users) users = users.getPlain(true)
      console.log('❗❗❗❗❗❗ ~ TaskController ~ getUsers ~ users:', users);
    } catch (error) {
      console.log('❗❗❗❗❗❗ ~ UserController ~ getUsers ~ error:', error);

    }


    res.status(200).json({
      sucess: true,
      message: users,
    });
  }

  static async createUser(req, res) {
    const { username, password } = req.body
    let user = ''
    try {
      user = await User.create({
        username,
        password
      })
      console.log('❗❗❗❗❗❗ ~ TaskController ~ getUsers ~ users:', user);
      if (user) user = user.getPlain(true)
    } catch (error) {
      console.log('❗❗❗❗❗❗ ~ UserController ~ getUsers ~ error:', error);
    }

    res.status(200).json({
      sucess: true,
      message: user,
    });
  }
}
