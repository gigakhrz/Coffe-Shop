import {configureStore} from '@reduxjs/toolkit';
import searchTitleSlice, {TitleProps} from './searchTitleSlice';
import categoryIdSlice, {CagatoryProps} from './categoryIdSlice';
import filteredCoffesSlice, {FilteredProps} from './filteredCoffesSlice';
import basketProductsSlice from './basketProductsSlice';
import {BaseBackgroundPropType} from 'react-native';

const store = configureStore({
  reducer: {
    categoryId: categoryIdSlice,
    search: searchTitleSlice,
    filteredCoffe: filteredCoffesSlice,
    basketProducts: basketProductsSlice,
  },
});

export type RootState = {
  categoryId: CagatoryProps;
  search: TitleProps;
  filteredCoffe: FilteredProps;
  basketProducts: BaseBackgroundPropType;
};

export default store;
