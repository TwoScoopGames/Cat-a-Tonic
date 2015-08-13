"use strict";

var pawInSpeed = 0.5;
var pawOutSpeed = -0.7;
var pawMin = 300;
var pawMax = 1000;

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // jshint ignore:line
		entity.velocity.x = 0;
		entity.velocity.y = pawInSpeed;
		if (data.input.button(entity.paw.input)) {
			entity.velocity.y = pawOutSpeed;
		}
      	if (entity.position.y < pawMin) {
          entity.position.y = pawMin;
          entity.velocity.y = 0;
        }
      	if (entity.position.y > pawMax) {
          entity.position.y = pawMax;
          entity.velocity.y = 0;
        }
	}, ["paw", "position", "size", "velocity"]);
};
