import { createReducer, on } from '@ngrx/store';
import { addPlayerSuccess, getPlayersSuccess, editPlayerSuccess, deletePlayerSuccess, setActivePlayer as selectPlayer, PlayerError } from './players.actions';
import { Player } from 'src/app/models/player';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export function sortByName(a: Player, b: Player): number {
  return a.name.localeCompare(b.name);
}

export function selectUserId(player: Player): string {
    return player.id ? player.id : player.email
}

export const adapter : EntityAdapter<Player> = createEntityAdapter<Player>({ sortComparer: sortByName, selectId: selectUserId });

export interface PlayersState extends EntityState<Player> {
  isLoaded: boolean
  selectedPlayer?: Player;
  playerError?: Error
}

export const initialState: PlayersState = 
  adapter.getInitialState({
    isLoaded: false,
    activeEntity: undefined,
    entityError: undefined
});

export const playersReducer = createReducer(
  initialState,
  on(getPlayersSuccess, (state, { players }) => {
    return adapter.setAll(players, {...state, playerError: undefined, isLoaded: true });
  }),
  on(addPlayerSuccess, (state, { player }) => {
    return adapter.addOne(player, {...state, playerError: undefined });
  }),
  on(selectPlayer, (state, { player }) => {
    return {...state, selectedPlayer: state.entities[player.id] }
  }),
  on(deletePlayerSuccess, (state, { player }) => {
    return adapter.removeOne(player.id, {...state, activePlayer: undefined, playerError: undefined })
  }),
  on(editPlayerSuccess, (state, { player }) => {
    return adapter.upsertOne(player, {...state, activePlayer: undefined, playerError: undefined })
  }),
  on(PlayerError, (state, error) => {
    console.log(error);
    return { ...state, playerError: error };
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();