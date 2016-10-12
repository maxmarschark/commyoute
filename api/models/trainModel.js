class Train {
  constructor({ name, ovrAvg, crowdAvg }) {
    this.name = name;
    this.overall = ovrAvg;
    // this.smelly = smellAvg;
    this.crowded = crowdAvg;
    // this.delayed = delayAvg;
  }
}

module.exports = Train;
