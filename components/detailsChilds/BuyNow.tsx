import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BuyNowProps {
  itemId: number | undefined;
  price: number | undefined;
}

const BuyNow = ({itemId, price}: BuyNowProps): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>Price</Text>
        <Text style={styles.priceNumber}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>Buy Now</Text>
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
    alignItems: 'center',
  },

  priceWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },

  priceText: {
    color: '#9B9B9B',
    fontSize: 14,
    fontWeight: '400',
  },

  priceNumber: {
    color: '#C67C4E',
    fontSize: 18,
    fontWeight: '600',
  },

  touchable: {
    width: 217,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C67C4E',
    borderRadius: 16,
  },

  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
