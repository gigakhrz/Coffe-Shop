import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import data from '../../data.json';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../feature/store';
import BasketProducts from './BasketProducts';
import {
  removeQuantity,
  setCoffesQuantity,
} from '../../feature/coffeQuantitySlice';
import PaymentSummary from './PaymentSummary';
import Discount from './Discount';
import OrderButton from './OrderButton';

const Basket = (): JSX.Element => {
  const route = useRoute();
  const dispatch = useDispatch();

  const [index, setIndex] = useState<number | undefined>();

  // coffes quantities state

  const quantities = useSelector(
    (store: RootState) => store.coffesQuantity.coffesQuantity,
  );

  // protucts id that selected from user
  const selectedCoffes = useSelector(
    (store: RootState) => store.basketProducts.products,
  );

  // filter data based on selectedCoffes array
  const basketItems = data.coffee_categories
    .flatMap(category => category.coffees)
    .filter(item => selectedCoffes.includes(item.id));

  // this useState will create the coffes quantity's array
  useEffect(() => {
    if (selectedCoffes.length > quantities.length) {
      // Increase quantities array when a new item is added
      dispatch(setCoffesQuantity([...quantities, 1]));
    } else if (
      selectedCoffes.length < quantities.length &&
      index !== undefined
    ) {
      // Decrease quantities array when an item is removed
      dispatch(removeQuantity(index));
    }
  }, [selectedCoffes]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
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
            <BasketProducts basketItems={basketItems} setIndex={setIndex} />
            <Discount />
            <PaymentSummary basketItems={basketItems} />
            <OrderButton />
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
    gap: 20,
  },

  emptyView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 150,
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
    paddingHorizontal: 20,
  },
});

export default Basket;
