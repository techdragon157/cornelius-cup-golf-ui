import { createSelector } from "@ngrx/store";
import { Player } from "../models/player";
import { PlayerState } from "./players.reducer";

export const playersList = createSelector((state: PlayerState) => state.players, (players: Array<Player>) => players);
export const activePlayer = createSelector((state: PlayerState) => state.activePlayer, (player?: Player) => player);
export const playerError = createSelector((state: PlayerState) => state.playerError, (playerError?: Error) => playerError);

export const getPlayer = (playerId: string) => createSelector((state: PlayerState) => state.players, (players: Array<Player>) => players.find((p) => p.id === playerId));
