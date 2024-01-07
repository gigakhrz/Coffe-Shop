import {ScrollView, StyleSheet, View} from 'react-native';
import data from '../data.json';
import {useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';

const CoffeList = (): JSX.Element => {
  return (
    <ScrollView>
      <View></View>
    </ScrollView>
  );
};

export default CoffeList;

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
