"use strict";

module.exports = function(entity, data) { // eslint-disable-line no-unused-vars
  console.log("timers1 tripped");
  entity.timers.timers0.running = true;
  entity.velocity.y = -0.5;
};
