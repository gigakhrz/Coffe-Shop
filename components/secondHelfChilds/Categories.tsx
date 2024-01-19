import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import data from '../../data.json';
import {useDispatch, useSelector} from 'react-redux';
import {setCategoryId} from '../../feature/categoryIdSlice';
import {RootState} from '../../feature/store';
import {useRoute} from '@react-navigation/native';

const Categories = (): JSX.Element => {
  const route = useRoute();

  console.log(route.name);

  const dispatch = useDispatch();
  // when user onpress category bar
  const chooseCategory = (id: number): void => {
    dispatch(setCategoryId(id));
  };

  const id = useSelector((srore: RootState) => srore.categoryId.id);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.CategoriesWrapper}>
      {data.coffee_categories.map(item => {
        return (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => chooseCategory(item.id)}>
            <View style={styles.category}>
              <Text style={styles.text}>{item.category}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  CategoriesWrapper: {
    flexDirection: 'row',
    width: '93%',
    marginLeft: 18,
    display: 'flex',
  },

  category: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 12,
  },

  text: {
    color: '#2F4B4E',
    fontSize: 14,
    fontWeight: '400',
  },
});
