import {StyleSheet, View} from 'react-native';
import Welcome from './components/mainPageChilds/Welcome';
import {useEffect, useState} from 'react';
import Footer from './components/Footer';
// import AppNavigator from './components/AppNavigator';
import MainPage from './components/MainPage';

function App(): React.JSX.Element {
  const [welcome, setWelcome] = useState<boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setWelcome(true);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View style={{flex: 1}}>
      {welcome ? <MainPage /> : <Welcome />}
      {/* shevasworoot */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
