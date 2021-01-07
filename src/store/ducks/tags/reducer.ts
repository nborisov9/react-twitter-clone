import produce, { Draft } from 'immer';

import { TagsActionsType, TagsActions } from './actionCreators';
import { LoadingState, TagsState } from './contracts/state';

const initialTagsState: TagsState = {
  items: [],
  LoadingState: LoadingState.NEVER,
};

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
  switch (action.type) {
    case TagsActionsType.SET_TAGS:
      draft.items = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;

    case TagsActionsType.FETCH_TAGS:
      draft.items = [];
      draft.LoadingState = LoadingState.LOADING;
      break;

    case TagsActionsType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
  }
}, initialTagsState);
