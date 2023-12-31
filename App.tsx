import {StyleSheet, View} from 'react-native';
import Welcome from './components/mainPageChilds/Welcome';
import {useEffect, useState} from 'react';
import Footer from './components/Footer';
// screens
import MainPage from './components/MainPage';
import Basket from './components/Basket';
// navigators
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import {Provider} from 'react-redux';
import store from './feature/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const [welcome, setWelcome] = useState<boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setWelcome(true);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        {welcome ? (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={MainPage} />
              <Stack.Screen name="Basket" component={Basket} />
            </Stack.Navigator>
            <Footer />
          </NavigationContainer>
        ) : (
          <Welcome />
        )}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
