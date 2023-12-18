import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Info from './firstHalfChilds/Info';

const FirstHalf = (): JSX.Element => {
  return (
    <LinearGradient
      style={styles.firstHalfWrapper}
      colors={['#131313', '#333333']}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 1}}>
      <Info />
    </LinearGradient>
  );
};

export default FirstHalf;

const styles = StyleSheet.create({
  firstHalfWrapper: {
    width: '100%',
    height: 250,
    paddingTop: 25,
    paddingHorizontal: 31,
  },
});
