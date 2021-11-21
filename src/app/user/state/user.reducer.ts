import { createReducer, on } from '@ngrx/store';

import { toggleMaskUsername } from './user.actions';
import { UserState } from './index';

const initialState: UserState = {
  maskUsername: false,
  currentUser: null
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(toggleMaskUsername, (state): UserState  => {
    return {
      ...state,
      maskUsername: !state.maskUsername
    };
  })
);
