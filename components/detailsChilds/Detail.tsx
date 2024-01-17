import {RouteProp} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {RootStackParamList} from '../../type';
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail: React.FC<{route: DetailScreenRouteProp}> = ({
  route,
}): JSX.Element => {
  return <></>;
};

export default Detail;

const styles = StyleSheet.create({});
