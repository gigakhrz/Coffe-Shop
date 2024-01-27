import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CoffeData} from '../../type';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../feature/store';

interface PaymentProps {
  basketItems: CoffeData[];
}

const PaymentSummary = ({basketItems}: PaymentProps) => {
  const dispatch = useDispatch();

  const quantities = useSelector(
    (store: RootState) => store.coffesQuantity.coffesQuantity,
  );

  // to calculate total price
  const TotalPrice = (): number => {
    const totalPrice = basketItems.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    // Dispatching action to update total price in the store
    // dispatch(setTotalPrice(totalPrice.toFixed(2)));
    return totalPrice;
  };

  console.log(TotalPrice());

  return (
    <View>
      <Text>PaymentSummary</Text>
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({});
