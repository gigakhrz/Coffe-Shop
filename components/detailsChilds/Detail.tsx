import {RouteProp} from '@react-navigation/native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../type';
import data from '../../data.json';
import CoffeInfo from './CoffeInfo';
import Description from './Description';
import BuyNow from './BuyNow';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  const {itemId} = route.params;

  // new array which contains all coffes without categories
  const coffe = data.coffee_categories
    .flatMap(category => category.coffees)
    .find(item => item.id === itemId);

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <CoffeInfo
          image={coffe?.image}
          title={coffe?.title}
          rate={coffe?.rating}
        />
        <Description
          description={coffe?.description}
          shortDescription={coffe?.shortDescription}
        />
      </ScrollView>
      <BuyNow />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: 12,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
