const TransDAO = require('../dao/transDAO');

class TrainsController {
  static Stuff(req, res) {
    TransDAO.searchBy({ user_id: req.session.currentUser.id })
    .then((trains) => {
      res.status(200).json(trains);
    });
  }
  static getTrainInfo(req, res) {
    TransDAO.
  }
}

  // static create(req, res) {
  //   const trainData = {
  //     type: req.body.type,
  //     name: req.body.name,
  //     overall: req.body.overall,
  //     delay: req.body.delay,
  //     crowded: req.body.crowded,
  //     smelly: req.body.smelly,
  //     reviewDate: req.body.review_date,
  //   };
  //   TransDAO.create(trainData)
  //          .then((trains) => res.status(200).json(trains));
  // }
  // static delete(req, res) {
  //   TransDAO.delete(req.params.id)
  //            .then(() => res.status(204).end());
  // }

module.exports = TrainsController;
