import {StyleSheet, View} from 'react-native';

const Search = (): JSX.Element => {
  return <View style={styles.searchWrapper}></View>;
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 52,
    backgroundColor: '#525252',
  },
});
