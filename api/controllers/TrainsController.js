const TransDAO = require('../dao/transDAO');

class TrainsController {
  static getTrainInfo(req, res) {
    TransDAO.getTrainInfo(req.params.id).then((train) => {
      res.status(200).json(train);
    });
  }
  static all(req, res) {
    console.log('anything');
    TransDAO.all().then((trains) => {
      res.status(200).json(trains);
    });
  }
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
    TransDAO.create(trainData)
           .then((trains) => res.status(200).json(trains));
  }
  // static delete(req, res) {
  //   TransDAO.delete(req.params.id)
  //            .then(() => res.status(204).end());
  // }

module.exports = TrainsController;
