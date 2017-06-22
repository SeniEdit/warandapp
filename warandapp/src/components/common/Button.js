import React, {Component} from 'react';
import { TouchableOpacity, Text } from 'react-native';
const PropTypes = require('prop-types');
const ColorPropType = require('ColorPropType');

class Button extends Component {

  static propTypes = {
    /**
     * Text to display inside the button
     */
    title: PropTypes.string.isRequired,
    /**
     * Text to display for blindness accessibility features
     */
    accessibilityLabel: PropTypes.string,
    /**
     * Color of the text (iOS), or background color of the button (Android)
     */
    color: ColorPropType,
    /**
     * If true, disable all interactions for this component.
     */
    disabled: PropTypes.bool,
    /**
     * Handler to be called when the user taps the button
     */
    onPress: PropTypes.func.isRequired,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: PropTypes.string,
  };

  render() {
    const {
      accessibilityLabel,
      color,
      onPress,
      title,
      disabled,
      testID,
    } = this.props;
    return(
      <TouchableOpacity onPress={onPress}>
        <Text>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
