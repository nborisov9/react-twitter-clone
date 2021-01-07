import { Action } from 'redux';
import { LoadingState, Tweet, TweetsState } from '../contracts/state';

export enum TweetActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
}

// Наследование от Action говорит, что ключ type должен называться type и не инчае
export interface SetTweetsActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchAddTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_ADD_TWEET;
  payload: string;
}

export interface AddTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.ADD_TWEET;
  payload: Tweet;
}

export interface FetchTweetsActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
