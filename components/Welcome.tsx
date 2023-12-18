import {Image, View} from 'react-native';

const Welcome = (): JSX.Element => {
  return (
    <View>
      <Image source={require('../assets/coffe.png')} />
    </View>
  );
};

export default Welcome;
