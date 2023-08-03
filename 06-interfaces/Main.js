"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var cricketCoach = new CricketCoach_1.CricketCoach();
var golfCoach = new GolfCoach_1.GolfCoach();
var theCoaches = [];
theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coach = theCoaches_1[_i];
    console.log(coach.getDailyWorkout());
}
