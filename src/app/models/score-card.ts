import { Course } from "./course";
import { Player } from "./player";

export interface ScoreCard {
  id: number;
  player: Player;
  course: Course;
  handicap: number;
  strokes: number[];
  stablefordPoints?: number[];
  gross: number;
  nett: number;
  stableford?: number;
  pars: number;
  birdies: number;
  eagles: number;
  albatross: number;
  holesInOne: number;
}
