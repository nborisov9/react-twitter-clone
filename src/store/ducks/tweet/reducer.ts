import produce, { Draft } from 'immer';

import { TweetActions } from './actionCreators';
import { TweetActionsType } from './contracts/ActionTypes';
import { LoadingState, TweetState } from './contracts/state';

const initialTweetState: TweetState = {
  data: undefined,
  LoadingState: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
  switch (action.type) {
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;

    case TweetActionsType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.LoadingState = LoadingState.LOADING;
      break;

    case TweetActionsType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
  }
}, initialTweetState);
