import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BuyNow = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.priceWrapper}>
        <Text>Price</Text>
        <Text></Text>
      </View>
      <TouchableOpacity>
        <Text>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  priceWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
});
