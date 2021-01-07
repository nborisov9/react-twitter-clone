export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tag {
  _id: string;
  name: string;
  count: number;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export interface TagsState {
  items: Array<Tag>;
  LoadingState: LoadingState;
}
