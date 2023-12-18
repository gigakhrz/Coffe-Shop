import {StyleSheet, View} from 'react-native';
import Welcome from './components/Welcome';
import {useEffect, useState} from 'react';
import MainPage from './components/MainPage';

function App(): React.JSX.Element {
  const [welcome, setWelcome] = useState<boolean>(false);

  return (
    <View style={styles.main}>{welcome ? <MainPage /> : <Welcome />}</View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
