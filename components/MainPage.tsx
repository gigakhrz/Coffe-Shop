import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FirstHalf from './mainPageChilds/FirtsHalf';
import SecondHelf from './mainPageChilds/SecondHelf';
import CoffeList from './mainPageChilds/CoffeList';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setRoute} from '../feature/routeSlice';

const MainPage = (): JSX.Element => {
  const route = useRoute();
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      const name = route.name;
      dispatch(setRoute(name));
    }, [route]),
  );
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
