import {Image, StyleSheet, Text, View} from 'react-native';

interface CoffeInfoProps {
  image: string | undefined;
  title: string | undefined;
  rate: number | undefined;
}

const CoffeInfo = ({image, title, rate}: CoffeInfoProps): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.textWrapper}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.rateWrapper}>
            <Image
              style={styles.star}
              source={require('../../assets/star.png')}
            />
            <Text style={styles.rate}>{rate}</Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.coffeImage}>
            <Image
              style={styles.coffeMilk}
              source={require('../../assets/coffee-beans.png')}
            />
          </View>
          <View style={styles.coffeImage}>
            <Image
              style={styles.coffeMilk}
              source={require('../../assets/milk.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 5,
    marginBottom: 20,
  },

  image: {
    width: 255,
    height: 226,
    alignSelf: 'center',
  },

  textWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
  },

  titleRateWraper: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    color: '#2F2D2C',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },

  rateWrapper: {
    display: 'flex',
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    width: 20,
    height: 20,
  },

  rate: {
    color: '#2F2D2C',
    fontSize: 16,
    fontWeight: '600',
  },

  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignSelf: 'flex-end',
  },

  coffeImage: {
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF0F0',
    borderRadius: 15,
  },

  coffeMilk: {
    width: 20,
    height: 20,
    tintColor: 'brown',
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EAEAEA',
  },
});

export default CoffeInfo;
