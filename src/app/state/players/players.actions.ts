import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/models/player';

// add player
export const addPlayer = createAction('[Player] Add Player', props<{player: Player}>());
export const addPlayerSuccess = createAction('[Player] Add Player Success', props<{player: Player}>());

// get players
export const getPlayers = createAction('[Player] Get Players');
export const getPlayersSuccess = createAction('[Player] Get Players Success', props<{players: Player[]}>());

// edit / update player
export const editPlayer = createAction('[Player] Edit Player', props<{player: Player}>());
export const editPlayerSuccess = createAction('[Player] Edit Player Success', props<{player: Player}>());

// delete player
export const deletePlayer = createAction('[Player] Delete Player', props<{player: Player}>());
export const deletePlayerSuccess = createAction('[Player] Delete Player Success', props<{player: Player}>());

// set the active player
export const setActivePlayer = createAction('[Player] Select Player', props<{player: Player}>());

// any errors
export const PlayerError = createAction('[Player] Player Error', props<Error>());