import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {CoffeData} from '../../type';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../feature/store';
import {setTotalPrice} from '../../feature/totalPriceSlice';

interface PaymentProps {
  basketItems: CoffeData[];
}

const PaymentSummary = ({basketItems}: PaymentProps) => {
  const dispatch = useDispatch();

  // coffed quantities arrray
  const quantities = useSelector(
    (store: RootState) => store.coffesQuantity.coffesQuantity,
  );

  // the totalPrice state
  const totalPrice = useSelector((store: RootState) => store.totalPrice.price);

  // to calculate total price
  const calTotalPrice = (): number => {
    const totalPrice = basketItems.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    // Dispatching action to update total price in the store
    dispatch(setTotalPrice(totalPrice.toFixed(2)));
    return totalPrice;
  };

  // useEffect to recalculate total price whenever the quantity changes
  useEffect(() => {
    calTotalPrice();
  }, [quantities]);

  return (
    <View style={styles.containetPayment}>
      <Text style={styles.paymentText}> Payment Summary</Text>
      <View style={styles.priceContainer}>
        <View style={styles.priceDeliveryView}>
          <View style={styles.priceDelView}>
            <Text style={styles.priceTitle}> Price</Text>
            <Text style={styles.amountPrice}>${totalPrice}</Text>
          </View>
          <View style={styles.priceDelView}>
            <Text style={styles.priceTitle}> Delivery Fee</Text>
            <View style={styles.deliveryAmount}>
              <Text style={styles.amountPriceSale}> $ 2.0</Text>
              <Text style={styles.amountPrice}>$ 1.0</Text>
            </View>
          </View>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.priceDelView}>
          <Text style={styles.priceTitle}> Total Payment</Text>
          <Text style={styles.amountPrice}>
            $
            {totalPrice !== undefined
              ? parseFloat(totalPrice) * 1 + 1.0
              : 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  containetPayment: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 9,
  },

  paymentText: {
    color: '#2F2D2C',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },

  priceContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 21,
  },

  priceDeliveryView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },

  priceDelView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2F2D2C',
    fontStyle: 'normal',
  },

  deliveryAmount: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  amountPrice: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#2F2D2C',
  },

  amountPriceSale: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textDecorationLine: 'line-through',
    color: '#2F2D2C',
  },

  lineStyle: {
    width: 315,
    height: 1,
    backgroundColor: '#EAEAEA',
  },
});
export default PaymentSummary;
