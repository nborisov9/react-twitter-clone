import { call, put, takeLatest } from 'redux-saga/effects';

import { TagsApi } from '../../../services/api/tagsApi';
import { setTags, setTagsLoadingState, TagsActionsType } from './actionCreators';

import { LoadingState } from './contracts/state';

// worker saga
function* fetchTagsRequest() {
  try {
    const items = yield call(TagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

// speactator saga
export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}

// saga сначала отловит вызыванный action TagsActionsType.FETCH_TAGS, а потом вызовет функцию fetchTagsRequest

// takeEvery take every action
// takeLatest take last action
// put = dispatch / put также, как и dispatch, получив action, отправляет данные в reducer
