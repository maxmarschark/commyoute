const TransDAO = require('../dao/transDAO');

class TrainsController {
  static getTrainInfo(req, res) {
    TransDAO.getTrainInfo(req.params.id).then((train) => {
      res.status(200).json(train);
    });
  }
  static getCrowdedAvg(req, res) {
    TransDAO.getCrowdedAvg(req.body.crowded).then((train) => {
      res.status(200).json(train);
    });
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
