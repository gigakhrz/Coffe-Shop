import {ScrollView, StyleSheet, Text, View} from 'react-native';
import data from '../../data.json';

const Categories = (): JSX.Element => {
  console.log(data.coffee_categories);

  return (
    <ScrollView style={styles.CategoriesWrapper}>
      {data.coffee_categories.map(item => {
        return (
          <View style={styles.category}>
            <Text style={styles.text}>{item.category}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  CategoriesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },

  category: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },

  text: {
    color: '#2F4B4E',
    fontSize: 14,
    fontWeight: '400',
  },
});
