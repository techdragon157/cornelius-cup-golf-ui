import { createFeatureSelector, createSelector } from "@ngrx/store";
import  * as fromPlayers  from "./players.reducer";

export const selectPlayersState = createFeatureSelector<fromPlayers.PlayersState>("players");

export const selectAllPlayers = createSelector(
  selectPlayersState,
  fromPlayers.selectAll
);

export const selectPlayerById = (playerId: string) => createSelector(
  selectPlayersState,
  playersState => playersState.entities[playerId]
);

export const playersLoaded = createSelector(
  selectPlayersState,
  playersState => playersState.isLoaded
);

export const activePlayer = createSelector(
  selectPlayersState,
  playersState => playersState.selectedPlayer
);

export const playerError = createSelector(
  selectPlayersState,
  playersState => playersState.playerError
);
