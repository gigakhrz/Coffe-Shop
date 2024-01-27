import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const OrderButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}> Order</Text>
    </TouchableOpacity>
  );
};

export default OrderButton;

const styles = StyleSheet.create({
  button: {
    width: 315,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
});
