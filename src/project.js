function Project() {
	Iteration.call(this);
	this.iteration = 0;
}

Project.prototype.addIteration = function(iteration) {
	this.iteration += iteration;
}

Project.prototype.velocity = function() {
	return Iteration.prototype.totalPoints.call(this)/this.iteration;
}


