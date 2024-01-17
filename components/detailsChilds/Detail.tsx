import {RouteProp} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../type';
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  const {itemId} = route.params;

  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
