import React, {useEffect, useState} from 'react';
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

  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Set the initially selected ID (you can change this logic based on your requirement)
  useEffect(() => {
    // For example, set the first item's ID as initially selected
    if (data.coffee_categories.length > 0) {
      const initialId = data.coffee_categories[0].id;
      dispatch(setCategoryId(initialId));
      setSelectedId(initialId);
    }
  }, [dispatch]);

  const getId = (id: number): void => {
    dispatch(setCategoryId(id));
    setSelectedId(id);
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.CategoriesWrapper}>
      {data.coffee_categories.map(item => {
        const isSelected = selectedId === item.id;
        return (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => {
              getId(item.id);
            }}>
            <View
              style={[
                styles.category,
                {backgroundColor: isSelected ? '#C67C4E' : '#F3F3F3'},
              ]}>
              <Text
                style={[
                  styles.text,
                  {color: isSelected ? '#FFFFFF' : '#2F4B4E'},
                ]}>
                {item.category}
              </Text>
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
    marginBottom: 10,
  },

  category: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 12,
  },

  text: {
    color: '#2F4B4E',
    fontSize: 14,
    fontWeight: '400',
  },
});
