import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = (): JSX.Element => {
  return (
    <LinearGradient
      style={styles.linear}
      colors={['#000000', '#000000', '#000000']}>
      <ImageBackground
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/coffe.png')}></ImageBackground>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  image: {
    flex: 1,
    width: '100%',
  },
});
