import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BasketProducts = (): JSX.Element => {
  return <View style={styles.wrapper}></View>;
};

export default BasketProducts;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: 15,
  },
});
