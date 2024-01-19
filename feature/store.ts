import {configureStore} from '@reduxjs/toolkit';
import searchTitleSlice, {TitleProps} from './searchTitleSlice';
import categoryIdSlice, {CagatoryProps} from './categoryIdSlice';

const store = configureStore({
  reducer: {
    categoryId: categoryIdSlice,
    search: searchTitleSlice,
  },
});

export type RootState = {
  categoryId: CagatoryProps;
  search: TitleProps;
};

export default store;
