import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Promotions = (): JSX.Element => {
  return (
    <ImageBackground
      style={styles.PromptionWrapper}
      source={require('../../assets/promotion.png')}
      imageStyle={{borderRadius: 10}}
      resizeMode="cover">
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Buy one get one Free</Text>
      </View>
    </ImageBackground>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  PromptionWrapper: {
    width: 315,
    height: 140,
    marginTop: -70,
  },

  textWrapper: {
    backgroundColor: 'black',
    height: 25,
  },

  text: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
  },
});
