import {RouteProp} from '@react-navigation/native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../type';
import data from '../../data.json';
import CoffeInfo from './CoffeInfo';
import Description from './Description';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  const {itemId} = route.params;

  // new array which contains all coffes without categories
  const coffe = data.coffee_categories
    .flatMap(category => category.coffees)
    .find(item => item.id === itemId);

  return (
    <ScrollView style={styles.detailWrapper}>
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
