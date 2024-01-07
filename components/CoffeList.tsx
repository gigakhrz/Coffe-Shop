import {ScrollView, StyleSheet, View} from 'react-native';
import data from '../data.json';
import {useSelector} from 'react-redux';
import {RootState} from '../feature/store';

const CoffeList = (): JSX.Element => {
  const categoryId = useSelector((store: RootState) => store.categoryId.id);

  // filter
  const Coffe = data.coffee_categories.find(item => item.id === categoryId);

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
