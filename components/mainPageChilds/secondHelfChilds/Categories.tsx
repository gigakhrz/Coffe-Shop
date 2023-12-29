import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import data from '../../../data.json';

const Categories = (): JSX.Element => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.CategoriesWrapper}>
      {data.coffee_categories.map(item => {
        return (
          <TouchableWithoutFeedback key={item.id}>
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
