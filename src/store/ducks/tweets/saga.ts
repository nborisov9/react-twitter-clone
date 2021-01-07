import { call, put, takeLatest } from 'redux-saga/effects';

import { addTweet, setTweets, setTweetsLoadingState } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';
import { FetchAddTweetActionInterface, TweetActionsType } from './contracts/ActionTypes';

// worker saga
function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
  const data = {
    _id: Math.random().toString(36).substring(2),
    text: payload,
    user: {
      fullname: 'TESTfullnameTEST',
      username: 'TESTusenameTEST',
      avatarUrl: 'https://source.unsplash.com/random/100x100?3',
    },
  };

  try {
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

// speactator saga
export function* tweetsSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}

// saga сначала отловит вызыванный action TweetActionsType.FETCH_TWEETS, а потом вызовет функцию fetchTweetsRequest

// takeEvery take every action
// takeLatest take last action
// put = dispatch / put также, как и dispatch, получив action, отправляет данные в reducer
