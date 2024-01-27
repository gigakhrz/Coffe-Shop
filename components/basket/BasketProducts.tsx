import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CoffeData} from '../../type';
import SelectedProducts from './SelectedProducts';

interface BasketProductsProps {
  basketItems: CoffeData[];
}

const BasketProducts = ({basketItems}: BasketProductsProps): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      {basketItems.map((coffe, index) => {
        return (
          <SelectedProducts
            key={coffe.id}
            index={index}
            title={coffe.title}
            image={coffe.image}
          />
        );
      })}
    </View>
  );
};

export default BasketProducts;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: 10,
    marginTop: 20,
  },
});
