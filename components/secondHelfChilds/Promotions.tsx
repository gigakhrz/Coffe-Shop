import {ImageBackground, StyleSheet} from 'react-native';

const Promotions = (): JSX.Element => {
  return (
    <ImageBackground
      source={require('../../assets/promotion.png')}
      resizeMode="cover"></ImageBackground>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  PromptionWrapper: {
    width: 315,
    height: 140,
  },
});
