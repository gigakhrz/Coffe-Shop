import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SelectedProducts = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://png.pngtree.com/png-vector/20231102/ourmid/pngtree-a-cup-of-cappuccino-with-christmas-tree-latte-art-png-image_10357696.png',
        }}
      />

      <View style={styles.nameCountWrapper}>
        <Text style={styles.name}>capucino</Text>

        <View style={styles.countButtonsWrapper}>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.minus}></View>
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectedProducts;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 21,
    alignItems: 'center',
  },

  image: {
    width: 54,
    height: 54,
    borderRadius: 12,
  },

  nameCountWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 41,
    alignItems: 'center',
  },

  name: {
    color: '#2F2D2C',
    fontSize: 16,
    fontWeight: '600',
  },

  countButtonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#AAADB0',
  },

  minus: {
    width: 10,
    height: 3,
    backgroundColor: '#AAADB0',
  },

  plus: {
    color: '#2F2D2C',
    fontSize: 15,
    fontWeight: '900',
  },
});
