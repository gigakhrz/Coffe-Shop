import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
      state.coffesQuantity[index] += 1;
    },

    recreaseQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.coffesQuantity[index] -= 1;
    },

    setCoffesQuantity: (state, action: PayloadAction<number[]>) => {
      state.coffesQuantity = action.payload;
    },

    removeQuantity: (state, action: PayloadAction<number>) => {
      const coffeIndex = action.payload;
      state.coffesQuantity.filter((item, index) => index !== coffeIndex);
    },
  },
});

export const {
  increaseQuantity,
  recreaseQuantity,
  setCoffesQuantity,
  removeQuantity,
} = coffesQuantitySlice.actions;

export default coffesQuantitySlice.reducer;
