"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
      context.fillStyle = "#3a3933";
      context.fillRect(0, 0, data.canvas.width, data.canvas.height);
	}, []);
};
