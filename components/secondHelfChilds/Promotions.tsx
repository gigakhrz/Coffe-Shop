import {ImageBackground, StyleSheet} from 'react-native';

const Promotions = (): JSX.Element => {
  return (
    <ImageBackground
      style={styles.PromptionWrapper}
      source={require('../../assets/promotion.png')}
      resizeMode="cover"></ImageBackground>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  PromptionWrapper: {
    width: 315,
    height: 140,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
