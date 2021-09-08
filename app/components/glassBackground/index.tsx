import { memo, ReactNode } from 'react';
import IsEqual from 'react-fast-compare';
import { ImageBackground, ImageBackgroundProps, StyleSheet, View } from 'react-native';
import { styles } from './styles';

type GlassBackgroundProps = {
  children: ReactNode;
} & ImageBackgroundProps;

const DEFAULT_OVERLAY_COLOR = 'rgba(255, 255, 255, 0.1)';

function GlassBackground(props: GlassBackgroundProps): JSX.Element {
  const { children, ...imageBackgroundProps } = props;

  return (
    <ImageBackground style={styles.container} {...imageBackgroundProps}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: DEFAULT_OVERLAY_COLOR }]} />
      {children}
    </ImageBackground>
  );
}

export default memo(GlassBackground, IsEqual);
