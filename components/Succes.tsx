import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../feature/store';
import {RootStackParamList} from '../type';
import {setDefaultProduct} from '../feature/basketProductsSlice';

// SuccessOrder component
export default function Success(): JSX.Element {
  // Access the navigation prop for navigating between screens
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  // Retrieve the filtered items from the Redux store
  const filterItems = useSelector(
    (store: RootState) => store.filteredCoffe.filteredCoffe,
  );

  // useEffect hook to navigate back to the Home screen after a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    dispatch(setDefaultProduct([]));
    return () => clearTimeout(timeout);
  }, []);

  return (
    // Main container with success message and image
    <View style={styles.MainCont}>
      <Image style={styles.image} source={require('../assets/check.png')} />
      <View style={styles.viewSuccess}>
        <Text style={styles.congratSuccess}>Congratulations!</Text>
        <Text style={styles.successText}>
          Your order has been submitted successfully
        </Text>
      </View>
    </View>
  );
}

// Styles for the SuccessOrder component
const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  viewSuccess: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  congratSuccess: {
    color: '#2F2D2C',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
  },

  successText: {
    color: '#9B9B9B',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  image: {
    width: 50,
    height: 50,
  },
});
