import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = (): JSX.Element => {
  return (
    <LinearGradient
      style={styles.linear}
      colors={['#000000', '#000000', '#000000']}>
      <ImageBackground
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/coffe.png')}>
        <View style={styles.textWrapper}>
          <Text style={styles.h1}>
            Coffee so good, your taste buds will love it.
          </Text>
          <Text style={styles.p}>
            The best grain, the finest roast, the powerful flavor.
          </Text>
        </View>
      </ImageBackground>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
    width: 300,
    alignItems: 'center',
  },

  h1: {
    letterSpacing: 0.34,
    fontSize: 34,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },

  p: {
    color: '#A9A9A9',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21.5,
    letterSpacing: 0.14,
    textAlign: 'center',
    width: 260,
  },
});
