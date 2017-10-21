function Project() {
	this.iterationCount = [];
	this.totalIterationPoints = 0;
}
Project.prototype.addIteration = function(iteration) {
	this.iterationCount.push(iteration);
	this.totalIterationPoints += iteration.totalPoints();
};

Project.prototype.velocity = function() {
	return this.totalIterationPoints / this.iterationCount.length;
}

