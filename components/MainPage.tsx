import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FirstHalf from './mainPageChilds/FirtsHalf';
import SecondHelf from './mainPageChilds/SecondHelf';
import CoffeList from './mainPageChilds/CoffeList';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setRoute} from '../feature/routeSlice';

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
