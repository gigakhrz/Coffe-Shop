import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import data from '../../data.json';
import {useSelector} from 'react-redux';
import {RootState} from '../../feature/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../type';

const CoffeList = (): JSX.Element => {
  const categoryId = useSelector((store: RootState) => store.categoryId.id);

  // filter
  const Coffe = data.coffee_categories.find(item => item.id === categoryId);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.wrapper}>
      {Coffe?.coffees.map(item => {
        const itemId = item.id;
        return (
          <View style={styles.coffe} key={item.id}>
            <View style={styles.imageTitleWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', {itemId})}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>{`$ ${item.price}`}</Text>
              <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/add.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CoffeList;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexWrap: 'wrap',
    rowGap: 5,
    columnGap: 11,
    paddingHorizontal: 38,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  coffe: {
    backgroundColor: 'white',
    width: 149,
    padding: 5,
    height: 238,
    justifyContent: 'space-between',
    borderRadius: 16,
  },

  title: {
    marginLeft: 7,
    fontSize: 16,
    color: '#2F2D2C',
    fontWeight: '600',
  },

  image: {
    borderRadius: 16,
    width: 100,
    height: 100,
  },

  imageTitleWrapper: {
    display: 'flex',
    gap: 6,
  },

  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  price: {
    fontSize: 18,
    color: '#2F4B4E',
  },

  button: {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C67C4E',
    borderRadius: 8,
  },
});
