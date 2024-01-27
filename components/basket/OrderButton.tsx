import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../feature/store';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../type';

const OrderButton = () => {
  // the totalPrice state
  const totalPrice = useSelector((store: RootState) => store.totalPrice.price);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.addBasketView}>
      <View style={styles.lineStyle}>
        <View style={styles.paymentMethodCont}>
          <View style={styles.paymentCashCard}>
            <Image source={require('../../assets/moneys.png')} />
            <View style={styles.cashPrice}>
              <View style={styles.cashView}>
                <Text style={styles.cashText}> Cash</Text>
              </View>
              <Text style={styles.amountOfMoney}>
                $
                {totalPrice !== undefined
                  ? parseFloat(totalPrice) * 1 + 1.0
                  : 'N/A'}
              </Text>
            </View>
          </View>
          <Image source={require('../../assets/dots.png')} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Navigate to the 'Success' screen on button press
            navigation.dispatch(StackActions.replace('Success'));
          }}>
          <Text style={styles.text}> Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 55,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#FFFFFF',
    letterSpacing: 2,
  },

  addBasketView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },

  lineStyle: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    display: 'flex',
    alignItems: 'center',

    gap: 16,
  },

  paymentMethodCont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  paymentCashCard: {
    display: 'flex',
    flexDirection: 'row',
    gap: 22,
  },

  cashPrice: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  cashView: {
    width: 51,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#C67C4E',
  },

  cashText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
  },

  amountOfMoney: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#2F2D2C',
  },
});
