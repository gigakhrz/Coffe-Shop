import {StyleSheet, View} from 'react-native';

const Footer = (): JSX.Element => {
  return <View style={styles.footerWrapper}></View>;
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
});

export default Footer;
