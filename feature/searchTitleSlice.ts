import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface TitleProps {
  title: string;
}

const initialState = {
  title: '',
};

const searchTite = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const {setTitle} = searchTite.actions;
export default searchTite.reducer;
