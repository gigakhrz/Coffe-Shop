import {StyleSheet, View} from 'react-native';
import Welcome from './components/Welcome';
import {useEffect, useState} from 'react';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App(): React.JSX.Element {
  const [welcome, setWelcome] = useState<boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setWelcome(true);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View style={styles.main}>
      {welcome ? <MainPage /> : <Welcome />}
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
