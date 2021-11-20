import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from '../user';

export interface UserState {
  maskUsername: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUsername: false,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUsername = createSelector(
  getUserFeatureState,
  state => state.maskUsername
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(createAction('[User] Toggle Mask User Name'), state => {
    return {
      ...state,
      maskUsername: !state.maskUsername
    };
  })
);
