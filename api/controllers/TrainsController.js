const trainsDAO = require '../dao/UserDAO';

class TrainsController {
  statis getAllOfCurrentUser(req, res);
    TrainsDAO.searchBy({ user_id: req.session.currentUser.id }).then(trains) => {
      res.status(200).json(trains);
    });
}

static create(req, res) {
  const chirpData = {
    type: req.,
    name: req.,
    overall: req.,
    delay: req.,
    crowded: req.,
    smelly: req.,
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
