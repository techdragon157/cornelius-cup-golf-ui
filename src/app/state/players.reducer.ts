import { createReducer, on } from '@ngrx/store';
import { addPlayerSuccess, addPlayersSuccess, getPlayersSuccess, editPlayerSuccess, deletePlayerSuccess, setActivePlayer, PlayerError } from './players.actions';
import { Player } from 'src/app/models/player';

export interface PlayerState {
  players: Player[];
  activePlayer?: Player;
  playerError?: Error
}

export const initialState: PlayerState = {
  players: [],
  activePlayer: undefined,
  playerError: undefined
}

export const playersReducer = createReducer(
  initialState,
  on(getPlayersSuccess, (state, { players }) => {
    return {...state, players: players, playerError: undefined }
  }),
  on(addPlayerSuccess, (state, { player }) => {
    return {...state, players: [...state.players, player], playerError: undefined }
  }),
  on(addPlayersSuccess, (state, { players }) => {
    return {...state, players: [...state.players, ...players], playerError: undefined }
  }),
  on(setActivePlayer, (state, { player }) => {
    return {...state, selectedPlayer: state.players.find((p) => p.id === player.id) }
  }),
  on(deletePlayerSuccess, (state, { player }) => {
    return {...state, players: state.players.filter((p) => p.id !== player.id), activePlayer: undefined }
  }),
  on(editPlayerSuccess, (state, { player }) => {
    return {...state, players: [...state.players.filter((p) => p.id !== player.id), player], activePlayer: undefined}
  }),
  on(PlayerError, (state, error) => {
    console.log(error);
    return { ...state, playerError: error };
  })
);