import {StyleSheet, View} from 'react-native';

interface CoffeInfoProps {
  image: string | undefined;
  title: string | undefined;
  rate: number | undefined;
}

const CoffeInfo = ({image, title, rate}: CoffeInfoProps): JSX.Element => {
  return <View></View>;
};

const styles = StyleSheet.create({});

export default CoffeInfo;
