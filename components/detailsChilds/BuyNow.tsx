import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BuyNow = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.priceWrapper}></View>
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
  },

  priceWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
});
