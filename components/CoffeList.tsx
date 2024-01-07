import {StyleSheet, Text, View} from 'react-native';
import data from '../data.json';
import {useSelector} from 'react-redux';
import {RootState} from '../feature/store';

const CoffeList = (): JSX.Element => {
  const categoryId = useSelector((store: RootState) => store.categoryId.id);

  // filter
  const Coffe = data.coffee_categories.find(item => item.id === categoryId);

  return (
    <View style={styles.wrapper}>
      {Coffe?.coffees.map(item => {
        return (
          <View style={styles.coffe} key={item.id}>
            <View>
              <View>
                <Text>{item.title}</Text>
              </View>
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
  },

  coffe: {
    backgroundColor: 'red',
    width: 149,
  },
});
