import {StyleSheet, View} from 'react-native';
import Welcome from './components/Welcome';
import {useEffect, useState} from 'react';
import Footer from './components/Footer';
import AppNavigator from './components/AppNavigator';
import {useNavigation} from '@react-navigation/native';

function App(): React.JSX.Element {
  const [welcome, setWelcome] = useState<boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setWelcome(true);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  const nativagion = useNavigation();

  return (
    <View style={{flex: 1}}>
      {welcome ? <AppNavigator /> : <Welcome />}
      <Footer navigation={nativagion} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
