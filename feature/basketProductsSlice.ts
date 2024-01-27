import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface BasketProductProps {
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

    setDefaultProduct: (state, action: PayloadAction<number[]>) => {
      state.products = action.payload;
    },
  },
});

export const {setBasketProducts, setDefaultProduct} =
  basketProductsSlice.actions;
export default basketProductsSlice.reducer;
