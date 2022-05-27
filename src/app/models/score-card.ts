export interface ScoreCard {
  id: string;
  playerId: string;
  competitionId: string;
  gameId: string;
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
