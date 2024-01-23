import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface BasketProductProps {
  products: number[];
}

const initialState: BasketProductProps = {
  products: [],
};

const basketProductsSlice = createSlice({
  name: 'basketProducts',
  initialState,
  reducers: {
    setBasketProducts: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.products.includes(productId)) {
        state.products;
      } else {
        state.products.push(productId);
      }
    },
  },
});

export const {setBasketProducts} = basketProductsSlice.actions;
export default basketProductsSlice.reducer;
