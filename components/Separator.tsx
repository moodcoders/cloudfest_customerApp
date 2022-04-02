import React from 'react';
import { View } from 'react-native';

interface SeparatorParams {
  height: number;
  width?: number;
  extraProps?: any;
}

const Separator = (props: SeparatorParams) => <View style={props} />;

Separator.defaultProps = {
  height: 0,
  width: 0,
};

export default Separator;
