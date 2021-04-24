import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";
import {
    borderRadius,
    fontBold,
    h3,
    secondaryColor,
    disableColor, contrastColor,

} from '../StyleConstants';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {focused: false}
    }
    _focusUnderline = () => {
        this.setState({focused: true})
    }
    _unfocusUnderline = () => {
        this.setState({focused: false})
    }

    render() {
        return (
            <View>
                <TextInput placeholder={this.props.placeholder} onFocus={this._focusUnderline} onEndEditing={this._unfocusUnderline} style={[styles.input, {...this.props.style}]}/>
                <View style={ this.state.focused ? styles.underline_focused : styles.underline_unfocused}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    underline_focused: {
        width: '100%',
        height: 2,
        backgroundColor: contrastColor
    },
    underline_unfocused: {
        width: '100%',
        height: 2,
        backgroundColor: secondaryColor
    },
    input: {
        fontSize: h3,
        color: secondaryColor,
        fontFamily: fontBold,
        width: '100%',
    },
})

export default InputField;
