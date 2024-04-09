import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  user: User
  authToken: string,
  linkedCard: any
}

interface User {
  UID: string;
  fullName: string;
  email: string;
  phone: string;
  role: string,
  displayPicture: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: {
    UID: '',
    fullName: '',
    email: '',
    displayPicture: '',
    role: "",
    phone: "",
  },
  authToken: '',
  linkedCard: null

};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<UserState>) => {

      state.isLoggedIn = action.payload?.isLoggedIn;
      state.user = action.payload?.user;
      state.authToken = action.payload?.authToken;
    },

    logoutUser: state => {
      state.isLoggedIn = false;
      state.user = {
        UID: '',
        fullName: '',
        email: '',
        displayPicture: '',
        role: "",
        phone: ""
      }
    },


    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },

    updateProfilePicture: (state, action: PayloadAction<string>) => {

      if (state && state.user) {
        state.user.displayPicture = action.payload;
      }
    },
    showAuthScreen: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = false
    },
    storedLinkedCard: (state, action: PayloadAction<any>) => {
      state.linkedCard = action.payload
    }

  },
});

// Action creators are generated for each case reducer function
export const {
  updateUserState,
  logoutUser,
  updateProfilePicture,
  updateIsLoggedIn,
  showAuthScreen,
  storedLinkedCard
} = userSlice.actions;

export default userSlice.reducer;
