class Train {
  constructor({ name, ovrAvg, smellAvg, crowdAvg, delayAvg, img_url }) {
    this.name = name;
    this.overall = ovrAvg;
    this.smelly = smellAvg;
    this.crowded = crowdAvg;
    this.delayed = delayAvg;
    this.img_url = img_url;
  }
}

module.exports = Train;
