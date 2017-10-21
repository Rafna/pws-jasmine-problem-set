function Iteration() {
	this.pointsArray = [];
    this.points = 0;
}

Iteration.prototype.addPoints = function(points) {
	this.pointsArray.push(points);
	this.points += points;
};

Iteration.prototype.totalPoints = function() {
	return this.points;
};

