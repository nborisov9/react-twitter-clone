import { call, put, takeLatest } from 'redux-saga/effects';

import { setTweets, setTweetsLoadingState, TweetActionsType } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEETS, fetchTweetsRequest);
}

// saga сначала отловит вызыванный action TweetActionsType.FETCH_TWEETS, а потом вызовет функцию fetchTweetsRequest

// takeEvery take every action
// takeLatest take last action
// put = dispatch / put также, как и dispatch, получив action, отправляет данные в reducer
