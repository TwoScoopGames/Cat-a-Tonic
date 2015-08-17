"use strict";

module.exports = function(entity, data) { // eslint-disable-line no-unused-vars
  console.log("timers0 tripped");
  entity.timers.timers1.running = true;
  entity.velocity.y = 0.5;
};
