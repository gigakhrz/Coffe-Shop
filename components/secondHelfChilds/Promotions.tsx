import {ImageBackground, StyleSheet, View} from 'react-native';

const Promotions = (): JSX.Element => {
  return (
    <ImageBackground
      style={styles.PromptionWrapper}
      source={require('../../assets/promotion.png')}
      imageStyle={{borderRadius: 10}}
      resizeMode="cover"></ImageBackground>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  PromptionWrapper: {
    width: 315,
    height: 140,
    marginTop: -70,
  },
});
