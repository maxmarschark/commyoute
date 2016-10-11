const UserDAO = require('../dao/UserDAO');
const createToken = require('..utils/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  static login(req, res) {
    const { email, password } = req.body;
    UserDAO.findBy({ email })
           .then((user) => {
             if (!bcrypt.compareSync(password, user.password)) {
               res.status(401).end();
             } else {
               req.session.currentUser = user;
               const token = createToken(user);
               res.cookie('token', token);
               res.status(200).json(user);
             }
           })
           .catch((err) => {
             console.error(err);
             res.status(401).end();
           });
  }
  
}
