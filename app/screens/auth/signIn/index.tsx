import { statusCodes, GoogleSignin } from '@react-native-community/google-signin';
import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Alert, TouchableOpacity, Platform } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import GoogleLogo from '@/assets/images/btn_google_light_normal_ios.svg';
import AuthBackground from '@/assets/images/backgroundAuth.png';
import LogoBig from '@/assets/images/logo_big.svg';
import { CustomLoading, ImageOverlay } from '@/components';
import { googleIosKey, googleWebKey, AuthStackParamList, APP_SCREEN } from '@/configs';
import { useUserStore } from '@/hooks';
import { translate } from '@/i18n';
import styles from './styles';

const SignInScreen = (props: DrawerScreenProps<AuthStackParamList, APP_SCREEN.SIGN_IN>): React.ReactElement => {
  const { signIn, user } = useUserStore();

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: googleIosKey,
      webClientId: Platform.OS === 'ios' ? googleIosKey : googleWebKey,
      offlineAccess: true,
    });
  }, []);

  const onGooglePressAsync = async (): Promise<void> => {
    /* eslint-disable max-len */
    /* 
    if (__DEV__) {
      signIn({
        email: 'jnsg5072@gmail.com',
        name: 'JaeWang Lee',
        imageUrl:
          // eslint-disable-next-line max-len
          'https://lh5.googleusercontent.com/-zjDwE4_Stys/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnHxci6Tx9WHUE0rHnqFnKF5kvmow/s120/photo.jpg',
        socialType: 1,
        socialId: '114204659577173604862',
      });
      return;
    }

    const enable = await GoogleSignin.hasPlayServices();
    if (enable) {
      try {
        const userInfo = await GoogleSignin.signIn();

        signIn({
          email: userInfo.user.email,
          name: userInfo.user.name || userInfo.user.email,
          imageUrl:
            // eslint-disable-next-line
            'https://lh5.googleusercontent.com/-zjDwE4_Stys/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnHxci6Tx9WHUE0rHnqFnKF5kvmow/s120/photo.jpg',
          socialType: 1,
          socialId: userInfo.user.id,
        });
      } catch (error) {
        if (error.code === statusCodes.IN_PROGRESS) {
          Alert.alert('', translate('error.playInProgress'));
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          Alert.alert('', translate('error.playNotAvailable'));
        } else {
          Alert.alert('', error.toString());
        }
      }
    } else {
      Alert.alert('', translate('error.unk'));
    }
    */
    /* eslint-enable max-len */
    signIn({
      email: 'jnsg5072@gmail.com',
      name: 'JaeWang Lee',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://lh5.googleusercontent.com/-zjDwE4_Stys/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnHxci6Tx9WHUE0rHnqFnKF5kvmow/s120/photo.jpg',
      socialType: 1,
      socialId: '114204659577173604862',
    });
  };

  if (user.isLoading) {
    return <CustomLoading />;
  }
  return (
    <ImageOverlay style={styles.container} source={AuthBackground} useBlur={false}>
      <>
        <View style={styles.headerContainer}>
          <LogoBig width={120} height={120} />
          <Text style={styles.headerText}>{translate('signIn.title')}</Text>
        </View>
        <TouchableOpacity style={styles.googleContainer} onPress={onGooglePressAsync}>
          <GoogleLogo style={styles.googleLogo} width={60} height={60} />
          <Text style={styles.googleLabel}>{translate('signIn.continueGoogle')}</Text>
        </TouchableOpacity>
      </>
    </ImageOverlay>
  );
};

export default SignInScreen;
