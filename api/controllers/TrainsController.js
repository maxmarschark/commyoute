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

  static create(req, res) {
    console.log('trans creator hit');
    const trainData = {
      type: 'Train',
      name: req.body.Name,
      overall: req.body.overall,
      delay: req.body.Delay,
      crowded: req.body.Crowded,
      smelly: req.body.Smelly,
      u_id: req.body.UserId
    };
    TransDAO.create(trainData)
           .then((trains) => res.status(200).json(trains));
  }
}
  // static delete(req, res) {
  //   TransDAO.delete(req.params.id)
  //            .then(() => res.status(204).end());
  // }

module.exports = TrainsController;
