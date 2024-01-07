import {ScrollView, StyleSheet, View} from 'react-native';
import data from '../data.json';

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
