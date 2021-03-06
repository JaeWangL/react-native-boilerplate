import React from 'react';
import isEqual from 'react-fast-compare';
import { LoaderScreen } from 'react-native-ui-lib';

const CustomLoading = (): React.ReactElement => {
  return <LoaderScreen />;
};

export default React.memo(CustomLoading, isEqual);
