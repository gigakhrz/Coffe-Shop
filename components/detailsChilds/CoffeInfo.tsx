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
      <View>
        <View></View>
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
});

export default CoffeInfo;
