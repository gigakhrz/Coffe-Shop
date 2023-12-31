import {configureStore} from '@reduxjs/toolkit';
import categoryId, {CagatoryProps} from './categoryId';

const store = configureStore({
  reducer: {
    categoryId: categoryId,
  },
});

export type RootState = {
  categoryId: CagatoryProps;
};

export default store;
