import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from '../user';
import { toggleMaskUsername } from './user.actions';

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
  on(toggleMaskUsername, (state): UserState  => {
    return {
      ...state,
      maskUsername: !state.maskUsername
    };
  })
);
