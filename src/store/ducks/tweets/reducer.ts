import produce, { Draft } from 'immer';

import { TweetsActions } from './actionCreators';
import { TweetActionsType } from './contracts/ActionTypes';
import { LoadingState, TweetsState } from './contracts/state';

const initialTweetsState: TweetsState = {
  items: [],
  LoadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;

    case TweetActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.LoadingState = LoadingState.LOADING;
      break;

    case TweetActionsType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
  }
}, initialTweetsState);
