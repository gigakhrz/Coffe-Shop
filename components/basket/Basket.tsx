import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import SelectedProducts from './SelectedProducts';
import data from '../../data.json';
import {useSelector} from 'react-redux';
import {RootState} from '../../feature/store';

const Basket = (): JSX.Element => {
  const route = useRoute();

  // protucts id that selected from user
  const selectedCoffes = useSelector(
    (store: RootState) => store.basketProducts,
  );

  // filter data based on selectedCoffes array
  const basketItems = data.coffee_categories
    .flatMap(category => category.coffees)
    .filter(item => selectedCoffes.products.includes(item.id));

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={styles.basktWrapper}>
      {basketItems.length < 1 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>Your basket is empty </Text>
          <Image
            style={styles.emptyBasketImg}
            source={require('../../assets/basket.png')}
          />
        </View>
      ) : (
        <View style={styles.basketDiv}>
          <View style={styles.basktWrapper}>
            <SelectedProducts />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  basktWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },

  emptyView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  emptyText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#2F2D2C',
  },

  emptyBasketImg: {
    width: 70,
    height: 70,
  },

  basketDiv: {
    width: '100%',
    paddingBottom: 30,
  },
});

export default Basket;