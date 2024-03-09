
import { User } from './../models/index.js';
export class UserController {
  static async getUsers(req, res) {
    let users = ''
    try {
      users = await User.findAll()
      if(users) users = users.getPlain(true)
      console.log('❗❗❗❗❗❗ ~ TaskController ~ getUsers ~ users:', users);
    } catch (error) {
      console.log('❗❗❗❗❗❗ ~ UserController ~ getUsers ~ error:', error);

    }


    res.status(200).json({
      sucess: true,
      message: users,
    });
  }
}
