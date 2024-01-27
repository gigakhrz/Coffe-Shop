import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CoffeData} from '../../type';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../feature/store';
import {
  increaseQuantity,
  recreaseQuantity,
} from '../../feature/coffeQuantitySlice';

interface selectedProdctsProps {
  index: number;
  title: string | undefined;
  image: string | undefined;
}

const SelectedProducts = ({
  index,
  title,
  image,
}: selectedProdctsProps): JSX.Element => {
  const dispatch = useDispatch();

  //   array of the quantities
  const quantities = useSelector(
    (store: RootState) => store.coffesQuantity.coffesQuantity,
  );

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      <View style={styles.nameCountWrapper}>
        <Text style={styles.name}>{title}</Text>
        <View style={styles.countButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              dispatch(recreaseQuantity(index));
            }}>
            <View style={styles.minus}></View>
          </TouchableOpacity>
          <Text>{quantities[index]}</Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              dispatch(increaseQuantity(index));
            }}>
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
    height: 60,
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
    minWidth: 150,
    maxWidth: 150,
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
