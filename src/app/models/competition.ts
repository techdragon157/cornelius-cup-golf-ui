export interface Competition {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  playerIds: Array<string>
}