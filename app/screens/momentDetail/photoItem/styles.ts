import { Platform, StyleSheet } from 'react-native';
import { nanumMyeongjoBold, notoSans, placeholderGray200Color } from '@/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'android' ? 30 : 24,
  },
  firstContainer: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'android' ? 8 : 16,
  },
  photoRight: {
    alignSelf: 'flex-end',
  },
  titleLabel: {
    marginTop: 24,
    marginBottom: Platform.OS === 'android' ? -2 : 6,
    marginHorizontal: '15%',
    fontFamily: nanumMyeongjoBold,
    fontSize: 20,
  },
  descLabel: {
    marginHorizontal: '15%',
    color: placeholderGray200Color,
    fontFamily: notoSans,
    fontSize: 15,
    marginBottom: 36,
  },
});

export default styles;
