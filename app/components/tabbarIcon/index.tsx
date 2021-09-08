import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import VectorImage from 'react-native-vector-image';

type TabbarIconProps = {
  type: 'home' | 'shuttle' | 'diet' | 'notices' | 'settings';
  focused: boolean;
  color: string;
};

function TabbarIcon(props: TabbarIconProps): JSX.Element {
  const { color, focused, type } = props;

  if (type === 'shuttle') {
    return (
      <VectorImage
        style={{ width: 26, height: 26, tintColor: color }}
        source={require('../../../assets/icons/ic_tab_shuttle.svg')}
      />
    );
  }
  if (type === 'diet') {
    return (
      <VectorImage
        style={{ width: 26, height: 26, tintColor: color }}
        source={require('../../../assets/icons/ic_tab_diet.svg')}
      />
    );
  }
  if (type === 'notices') {
    return (
      <VectorImage
        style={{ width: 26, height: 26, tintColor: color }}
        source={require('../../../assets/icons/ic_tab_notices.svg')}
      />
    );
  }
  if (type === 'settings') {
    return (
      <VectorImage
        style={{ width: 26, height: 26, tintColor: color }}
        source={require('../../../assets/icons/ic_tab_settings.svg')}
      />
    );
  }

  return (
    <VectorImage
      style={{ width: 26, height: 26, tintColor: color }}
      source={require('../../../assets/icons/ic_tab_home.svg')}
    />
  );
}

export default memo(TabbarIcon, IsEqual);
