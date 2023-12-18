import {Image, StyleSheet, Text, View} from 'react-native';

const info = (): JSX.Element => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.location}>
        <Text style={styles.title}>location</Text>
        <Text style={styles.whereIs}>Bilzen,Tanjungbalai.</Text>
      </View>

      <Image source={require('../../assets/avatar.png')} />
    </View>
  );
};

export default info;

const styles = StyleSheet.create({
  infoWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  location: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  title: {
    color: 'white',
    fontSize: 12,
    letterSpacing: -0.24,
    fontWeight: '400',
  },

  whereIs: {
    color: '#DDD',
    fontSize: 14,
    fontWeight: '600',
  },
});
