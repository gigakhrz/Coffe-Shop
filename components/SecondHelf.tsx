import {StyleSheet, View} from 'react-native';
import Promotions from './secondHelfChilds/Promotions';

const SecondHelf = (): JSX.Element => {
  return (
    <View style={style.sHWrapper}>
      <Promotions />
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
