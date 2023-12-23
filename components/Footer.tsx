import {Image, StyleSheet, View} from 'react-native';

const Footer = (): JSX.Element => {
  return (
    <View style={styles.footerWrapper}>
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
  },

  home: {
    minWidth: 19,
    minHeight: 19,
  },
});

export default Footer;
