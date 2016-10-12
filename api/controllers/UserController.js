const UserDAO = require('../dao/UserDAO');

class UserController {
  static getOne(req, res) {
    UserDAO.findUser({ id: req.params.id })
           .then((user) => res.status(200).json(user));
  }
  static changeName(req, res) {
    UserDAO.changeName({ name: req.body.name, uid: req.params.id })
           .then((user) => res.status(200).json(user));
  }
}

module.exports = UserController;
