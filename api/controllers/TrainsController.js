const trainsDAO = require('../dao/TransDAO');

class TrainsController {
  static getAllOfCurrentUser(req, res) {
    TrainsDAO.searchBy({ user_id: req.session.currentUser.id })
    .then((trains) => {
      res.status(200).json(trains);
    });
}

static create(req, res) {
  const trainData = {
    type: req.body.type,
    name: req.body.name,
    overall: req.body.overall,
    delay: req.body.delay,
    crowded: req.body.crowded,
    smelly: req.body.smelly,
    reviewDate: req.body.review_date,
  };
  TrainsDAO.create(trainsData)
         .then((trains) => res.status(200).json(trains));
}
static delete(req, res) {
  TrainsDAO.delete(req.params.id)
         .then(() => res.status(204).end());
}
}

module.exports = TrainsController;
