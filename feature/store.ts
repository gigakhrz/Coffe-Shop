import {configureStore} from '@reduxjs/toolkit';
import searchTitleSlice, {TitleProps} from './searchTitleSlice';
import categoryIdSlice, {CagatoryProps} from './categoryIdSlice';
import filteredCoffesSlice, {FilteredProps} from './filteredCoffesSlice';
import basketProductsSlice, {BasketProductProps} from './basketProductsSlice';
import {BaseBackgroundPropType} from 'react-native';
import coffeQuantitySlice, {CoffeQuantity} from './coffeQuantitySlice';

const store = configureStore({
  reducer: {
    categoryId: categoryIdSlice,
    search: searchTitleSlice,
    filteredCoffe: filteredCoffesSlice,
    basketProducts: basketProductsSlice,
    coffesQuantity: coffeQuantitySlice,
  },
});

export type RootState = {
  categoryId: CagatoryProps;
  search: TitleProps;
  filteredCoffe: FilteredProps;
  basketProducts: BasketProductProps;
  coffesQuantity: CoffeQuantity;
};

export default store;
