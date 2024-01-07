import {ScrollView, StyleSheet, View} from 'react-native';
import data from '../data.json';
import {useSelector} from 'react-redux';
import {RootState} from '../feature/store';

const categoryId = useSelector((store: RootState) => store.categoryId.id);

// filter
const Coffe = data.coffee_categories.filter(item => {
  item.id === categoryId;
});

const CoffeList = (): JSX.Element => {
  return (
    <ScrollView>
      <View></View>
    </ScrollView>
  );
};

export default CoffeList;

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
