import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CoffeData} from '../type';

export interface FilteredProps {
  filteredCoffe: CoffeData[];
}

const initialState: FilteredProps = {
  filteredCoffe: [],
};

const filteredCoffeSlice = createSlice({
  name: 'filteredCoffe',
  initialState,
  reducers: {
    setFilteredCoffes: (state, action: PayloadAction<CoffeData[]>) => {
      state.filteredCoffe = action.payload;
    },
  },
});

export const {setFilteredCoffes} = filteredCoffeSlice.actions;
export default filteredCoffeSlice.reducer;
