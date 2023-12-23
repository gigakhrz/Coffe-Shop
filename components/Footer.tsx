import {Image, StyleSheet, View} from 'react-native';

const Footer = (): JSX.Element => {
  return (
    <View style={styles.footerWrapper}>
      <Image style={styles.home} source={require('../assets/Home.png')} />
      <Image style={styles.home} source={require('../assets/Bag2.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerWrapper: {
    alignSelf: 'flex-end',
    width: '100%',
    backgroundColor: '#F9F9F9',
    height: 94,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
  },

  home: {
    minWidth: 30,
    minHeight: 30,
  },
});

export default Footer;
