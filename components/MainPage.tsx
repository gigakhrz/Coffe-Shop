import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FirstHalf from './mainPageChilds/FirtsHalf';
import SecondHelf from './mainPageChilds/SecondHelf';
import CoffeList from './mainPageChilds/CoffeList';

const MainPage = (): JSX.Element => {
  return (
    <ScrollView style={styles.wrapper}>
      <FirstHalf />
      <SecondHelf />
      <CoffeList />
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
