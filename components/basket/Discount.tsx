import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Discount = () => {
  return (
    <View style={styles.discountCont}>
      <View style={styles.line}></View>
      <View style={styles.discountView}>
        <Image source={require('../../assets/Discount.png')} />
        <Text style={styles.discountText}> 1 Discount is applied</Text>
      </View>
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  discountCont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },

  line: {
    width: '100%',
    height: 4,
    backgroundColor: '#F4F4F4',
  },

  discountView: {
    width: 315,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 14,
  },

  discountText: {
    fontSize: 14,
    color: '#2F2D2C',
    fontStyle: 'normal',
    fontWeight: '600',
  },
});
