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
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },

  image: {
    width: '100%',
    height: 226,
  },

  textWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: 150,
  },

  titleRateWraper: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    color: '#2F2D2C',
    fontSize: 20,
    fontWeight: '600',
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
});

export default CoffeInfo;
