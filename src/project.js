function Project() {
	Iteration.call(this);
	this.iteration = 0;
}

Project.prototype.addIteration = function(iteration) {
	this.iteration += iteration;
}

Project.prototype.velocity = function() {
	var averagePoints = Iteration.prototype.totalPoints();
	return averagePoints/this.iteration;
}


