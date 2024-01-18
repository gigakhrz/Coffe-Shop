import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FirstHalf from './mainPageChilds/FirtsHalf';
import SecondHelf from './mainPageChilds/SecondHelf';
import CoffeList from './mainPageChilds/CoffeList';
import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';

const MainPage = (): JSX.Element => {
  // const route = useRoute();
  // const name = route.name;
  // useEffect(() => {}, []);
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
