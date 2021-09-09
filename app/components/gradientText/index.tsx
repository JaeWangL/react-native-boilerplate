import { memo, ReactNode } from 'react';
import IsEqual from 'react-fast-compare';
import { StyleSheet, Text, TextProps } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import { styles } from './styles';

type GradientTextProps = {
  children: ReactNode;
} & TextProps & { gradient: LinearGradientProps };

function GradientText(props: GradientTextProps): JSX.Element {
  const { gradient, style } = props;

  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} {...gradient} style={StyleSheet.absoluteFill} />
      <Text {...props} style={[style, styles.mask]} />
    </MaskedView>
  );
}

export default memo(GradientText, IsEqual);
