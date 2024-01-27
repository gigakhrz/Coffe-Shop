import {configureStore} from '@reduxjs/toolkit';
import searchTitleSlice, {TitleProps} from './searchTitleSlice';
import categoryIdSlice, {CagatoryProps} from './categoryIdSlice';
import filteredCoffesSlice, {FilteredProps} from './filteredCoffesSlice';
import basketProductsSlice, {BasketProductProps} from './basketProductsSlice';
import coffeQuantitySlice, {CoffeQuantityProps} from './coffeQuantitySlice';
import totalPriceSlice, {TotalPriceProps} from './totalPriceSlice';

const store = configureStore({
  reducer: {
    categoryId: categoryIdSlice,
    search: searchTitleSlice,
    filteredCoffe: filteredCoffesSlice,
    basketProducts: basketProductsSlice,
    coffesQuantity: coffeQuantitySlice,
    totalPrice: totalPriceSlice,
  },
});

export type RootState = {
  categoryId: CagatoryProps;
  search: TitleProps;
  filteredCoffe: FilteredProps;
  basketProducts: BasketProductProps;
  coffesQuantity: CoffeQuantityProps;
  totalPrice: TotalPriceProps;
};

export default store;
