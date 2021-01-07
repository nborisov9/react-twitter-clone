import { call, put, takeEvery } from 'redux-saga/effects';

import { TweetsApi } from '../../../services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/state';
import { setTweetData, setTweetLoadingState } from './actionCreators';
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/ActionTypes';

import { LoadingState } from './contracts/state';

// worker saga
function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
  try {
    const data: Array<Tweet> = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

// speactator saga
export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
