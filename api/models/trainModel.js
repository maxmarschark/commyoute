class Train {
  constructor({ name, ovrAvg, smellAvg, crowdAvg, delayAvg }) {
    this.name = name;
    this.overall = ovrAvg;
    this.smelly = smellAvg;
    this.crowded = crowdAvg;
    this.delayed = delayAvg;
  }
}

module.exports = Train;
