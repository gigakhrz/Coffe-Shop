import {Image, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setTitle} from '../../feature/searchTitleSlice';

const Search = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.inputWrapper}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/search.png')}
        />
        <TextInput
          onChangeText={text => dispatch(setTitle(text))}
          style={styles.input}
          placeholderTextColor="#989898"
          placeholder="Search coffee"
          underlineColorAndroid="#525252"
        />
      </View>
    </View>
  );
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
    paddingLeft: 21,
    paddingRight: 5,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    gap: 12,
  },

  searchIcon: {
    height: 20,
    width: 20,
  },

  input: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
});
