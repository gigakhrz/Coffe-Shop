import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FirstHalf from './mainPageChilds/FirtsHalf';
import SecondHelf from './mainPageChilds/SecondHelf';
import Footer from './Footer';
import {RootStackParamList} from '../type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const MainPage = (): JSX.Element => {
  return (
    <ScrollView style={styles.wrapper}>
      <FirstHalf />
      <SecondHelf />
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    height: '100%',
  },
});
