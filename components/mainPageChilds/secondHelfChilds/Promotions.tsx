import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Promotions = (): JSX.Element => {
  return (
    <ImageBackground
      style={styles.PromptionWrapper}
      source={require('../../assets/promotion.png')}
      imageStyle={{borderRadius: 10}}
      resizeMode="cover">
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Buy one get</Text>
      </View>

      <View style={styles.textWrapper2}>
        <Text style={styles.text}>one Free</Text>
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
    paddingLeft: 24,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    gap: 10,
  },

  textWrapper: {
    backgroundColor: 'black',
    height: 25,
    width: 200,
  },

  textWrapper2: {
    backgroundColor: 'black',
    height: 25,
    width: 149,
  },

  text: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
    marginTop: -22,
    zIndex: 1,
    alignSelf: 'center',
  },
});
