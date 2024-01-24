import {RouteProp} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../type';
import data from '../../data.json';
import CoffeInfo from './CoffeInfo';
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  const {itemId} = route.params;

  const coffe = data.coffee_categories
    .flatMap(category => category.coffees)
    .find(item => item.id === itemId);

  return (
    <View style={styles.detailWrapper}>
      <CoffeInfo
        image={coffe?.image}
        title={coffe?.title}
        rate={coffe?.rating}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  detailWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    display: 'flex',
    gap: 20,
  },
});
