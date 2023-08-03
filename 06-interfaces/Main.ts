import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";
import { Coach } from "./Coach";

let cricketCoach = new CricketCoach()
let golfCoach = new GolfCoach()

let theCoaches: Coach[] = []

theCoaches.push(cricketCoach)
theCoaches.push(golfCoach)

for(let coach of theCoaches){
    console.log(coach.getDailyWorkout())
}