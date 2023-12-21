import {StyleSheet, View} from 'react-native';
import Promotions from './secondHelfChilds/Promotions';
import Categories from './secondHelfChilds/Categories';

const SecondHelf = (): JSX.Element => {
  return (
    <View style={style.sHWrapper}>
      <Promotions />
      <Categories />
    </View>
  );
};

export default SecondHelf;

const style = StyleSheet.create({
  sHWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 26,
    alignItems: 'center',
  },
});
