export interface Game {
  id: string;
  competitionId: string
  name: string;
  dateTime?: Date;
  si: number[];
  par: number[];
}