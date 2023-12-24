import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../type';

const Footer = ({navigation}: {navigation: any}): JSX.Element | null => {
  return (
    <View style={styles.footerWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
        <Image style={styles.home} source={require('../assets/Home.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
        <Image style={styles.home} source={require('../assets/Bag2.png')} />
      </TouchableOpacity>
    </View>
  );
};

// ...styles remain the same

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
