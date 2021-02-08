import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import PropTypes from 'prop-types';
import theme from './theme';

export default function NButton({
  title,
  onPress,
  mode,
  labelTextSize,
  labelTextColor,
  icon,
  color,
}) {
  return (
    <Button
      mode="contained"
      icon={icon}
      color={color}
      labelStyle={{color: labelTextColor}}
      onPress={onPress}>
      {title}
    </Button>
  );
}
NButton.propTypes = {
  title: PropTypes.string,
  labelTextSize: PropTypes.number,
};
NButton.defaultProps = {
  title: 'Button',
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
  },
});
//
// <View style={styles.cont}>
//         <NButton icon="facebook" mode="contained" title="Facebook" />
//         <NButton icon="google" mode="contained" title="google" />
//       </View>
//        <NButton icon="google" mode="contained" title="google" color="black"/>
