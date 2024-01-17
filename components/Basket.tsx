import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';

const Basket = (): JSX.Element => {
  const route = useRoute();

  useEffect(() => {
    console.log(route.name + '      baskeet');
  }, [route.name]);
  return (
    <View style={styles.basktWrapper}>
      <Text>i,m Basket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  basktWrapper: {
    width: '100%',
  },
});

export default Basket;
