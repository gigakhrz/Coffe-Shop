import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface CagatoryProps {
  id: number;
}

const initialState: CagatoryProps = {
  id: 1,
};

const categoryId = createSlice({
  name: 'categoryId',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const {setCategoryId} = categoryId.actions;
export default categoryId.reducer;
