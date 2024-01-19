import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface TitleProps {
  title: string;
}

const initialState = {
  title: '',
};

const searchTitle = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const {setTitle} = searchTitle.actions;
export default searchTitle.reducer;
