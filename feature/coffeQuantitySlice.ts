import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

export interface CoffeQuantityProps {
  coffesQuantity: number[];
}

const initialState: CoffeQuantityProps = {
  coffesQuantity: [],
};

const coffesQuantitySlice = createSlice({
  name: 'coffesQuantity',
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.coffesQuantity[index] + 1;
    },

    recreaseQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.coffesQuantity[index] - 1;
    },

    setCoffesQuantity: (state, action: PayloadAction<number[]>) => {
      state.coffesQuantity = action.payload;
    },
  },
});

export const {increaseQuantity, recreaseQuantity, setCoffesQuantity} =
  coffesQuantitySlice.actions;

export default coffesQuantitySlice.reducer;
