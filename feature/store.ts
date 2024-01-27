import {configureStore} from '@reduxjs/toolkit';
import searchTitleSlice, {TitleProps} from './searchTitleSlice';
import categoryIdSlice, {CagatoryProps} from './categoryIdSlice';
import filteredCoffesSlice, {FilteredProps} from './filteredCoffesSlice';
import basketProductsSlice, {BasketProductProps} from './basketProductsSlice';
import coffeQuantitySlice, {CoffeQuantityProps} from './coffeQuantitySlice';
import totalPriceSlice, {TotalPriceProps} from './totalPriceSlice';
import routeSlice, {RouteProps} from './routeSlice';

const store = configureStore({
  reducer: {
    categoryId: categoryIdSlice,
    search: searchTitleSlice,
    filteredCoffe: filteredCoffesSlice,
    basketProducts: basketProductsSlice,
    coffesQuantity: coffeQuantitySlice,
    totalPrice: totalPriceSlice,
    stateRoute: routeSlice,
  },
});

export type RootState = {
  categoryId: CagatoryProps;
  search: TitleProps;
  filteredCoffe: FilteredProps;
  basketProducts: BasketProductProps;
  coffesQuantity: CoffeQuantityProps;
  totalPrice: TotalPriceProps;
  stateRoute: RouteProps;
};

export default store;
