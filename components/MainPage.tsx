import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FirstHalf from './FirtsHalf';
import SecondHelf from './SecondHelf';

const MainPage = (): JSX.Element => {
  return (
    <ScrollView style={styles.wrapper}>
      <FirstHalf />
      <SecondHelf />
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
