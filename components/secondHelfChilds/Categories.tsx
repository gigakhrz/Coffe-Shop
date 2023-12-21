import {ScrollView, StyleSheet, Text, View} from 'react-native';
import data from '../../data.json';

const Categories = (): JSX.Element => {
  console.log(data.coffee_categories);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.CategoriesWrapper}>
      {data.coffee_categories.map((item, index) => {
        return (
          <View key={index} style={styles.category}>
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
    flexDirection: 'row',
    minWidth: '100%',
    marginLeft: 31,
    display: 'flex',
  },

  category: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
  },

  text: {
    color: '#2F4B4E',
    fontSize: 14,
    fontWeight: '400',
  },
});
