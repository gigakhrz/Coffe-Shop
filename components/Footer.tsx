import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../type';
import {NavigationProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../feature/store';

const Footer = (): JSX.Element | null => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const selectedCoffes = useSelector(
    (store: RootState) => store.basketProducts.products,
  );

  return (
    <View style={styles.footerWrapper}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.replace('Home'))}>
        <Image style={styles.home} source={require('../assets/Home.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
        <Image style={styles.home} source={require('../assets/Bag2.png')} />
        <View
          style={[
            styles.amountOfCoffeeView,
            {display: selectedCoffes.length === 0 ? 'none' : 'flex'},
          ]}>
          <Text style={styles.CoffeeQuantityText}>{selectedCoffes.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerWrapper: {
    alignSelf: 'flex-end',
    width: '100%',
    backgroundColor: '#F9F9F9',
    height: 94,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
  },

  home: {
    minWidth: 30,
    minHeight: 30,
    position: 'relative',
  },
  amountOfCoffeeView: {
    position: 'absolute',
    width: 20,
    height: 17,
    backgroundColor: 'red',
    borderRadius: 5,
    right: -10,
    top: -3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  CoffeeQuantityText: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'normal',
  },
});

export default Footer;
