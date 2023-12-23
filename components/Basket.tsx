import {StyleSheet, Text, View} from 'react-native';

const Basket = (): JSX.Element => {
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
