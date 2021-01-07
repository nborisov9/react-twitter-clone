import { createSelector } from 'reselect';

import { RootState } from '../../store';
import { LoadingState, TagsState } from './contracts/state';

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTags(state).LoadingState;

export const selectIsTagsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);

// ============
// если состояние твитов изменилось createSelector вернет актуальнуюю ссылку на данные
// иначе может возвращаться старая ссылка
// Селекторы эффективны. Селектор не производит вычислений, пока один из его аргументов не изменился.
