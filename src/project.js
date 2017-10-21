function Project() {
	this.iterationCount = [];
	this.totalIterationPoints = 0;
	this.iterationArray = [];
}
Project.prototype.addIteration = function(iteration) {
	this.iterationCount.push(iteration);
	if(this.iterationCount.length > 3){
		this.iterationCount.splice(0,1);
		this.totalIterationPoints += iteration.totalPoints() - this.iterationArray[0];
	}
	else{
		this.totalIterationPoints += iteration.totalPoints();
		this.iterationArray.push(this.totalIterationPoints);
	}
};

Project.prototype.velocity = function() {
	return this.totalIterationPoints / this.iterationCount.length;
}


