import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '../user';

export interface UserState {
  maskUsername: boolean;
  currentUser: User;
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUsername = createSelector(
  getUserFeatureState,
  state => state.maskUsername
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);
