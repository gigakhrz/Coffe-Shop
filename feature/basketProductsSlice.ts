import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// added products
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

    setRemoveProduct: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      if (state.products.includes(itemId)) {
        state.products = state.products.filter(id => id !== itemId);
      }
    },
  },
});

export const {setBasketProducts, setDefaultProduct, setRemoveProduct} =
  basketProductsSlice.actions;
export default basketProductsSlice.reducer;
