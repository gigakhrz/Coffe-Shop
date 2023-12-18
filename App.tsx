import {StyleSheet, View} from 'react-native';
import Welcome from './components/Welcome';

function App(): React.JSX.Element {
  return (
    <View style={styles.main}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
