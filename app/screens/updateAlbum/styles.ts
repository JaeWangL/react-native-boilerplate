import { Platform, StyleSheet } from 'react-native';
import { baseBlackColor } from '@/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseBlackColor,
  },
  codeContainer: {
    marginHorizontal: 24,
    marginTop: 10,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  codeRowContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  codeTitle: {
    fontFamily: 'Noto Sans KR Bold',
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
  codeDesc: {
    marginTop: 6,
    fontFamily: 'Noto Sans KR Light',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
  formContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginBottom: 24,
    marginTop: 16,
  },
  formSubtitle: {
    marginTop: 24,
    fontFamily: 'Noto Sans KR Bold',
    fontSize: Platform.OS === 'android' ? 16 : 17,
    fontWeight: '700',
    color: 'white',
  },
  inputContainer: {
    marginTop: 6,
    color: 'white',
    fontFamily: 'Noto Sans KR Light',
    fontSize: Platform.OS === 'android' ? 16 : 17,
    fontWeight: '400',
    height: 40,
  },
  carouselContainer: {
    marginVertical: 24,
  },
  membersContainer: {
    marginTop: 12,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 36,
  },
  buttonBack: {
    width: '30%',
    marginRight: 4,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    backgroundColor: 'transparent',
  },
  buttonBackLabel: {
    marginVertical: Platform.OS === 'android' ? 4 : 8,
    color: 'white',
    fontFamily: 'Noto Sans KR',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -1,
  },
  buttonCreate: {
    width: '70%',
    marginLeft: 4,
    borderRadius: 0,
    backgroundColor: 'white',
  },
  buttonCreateLabel: {
    marginVertical: Platform.OS === 'android' ? 4 : 8,
    color: 'black',
    fontFamily: 'Noto Sans KR',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -1,
  },
});

export default styles;
