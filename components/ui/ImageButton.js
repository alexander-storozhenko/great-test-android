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
import Image from "../svg/Image";

const DEFAULT_SIZE = 40
const DEFAULT_COLOR = secondaryColor

class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{width: this.props.size || DEFAULT_SIZE, height: this.props.size || DEFAULT_SIZE }}>
                <TouchableNativeFeedback onPress={this.props.onPress}>
                    <Image width={'100%'} height={'100%'} fill={this.props.color || DEFAULT_COLOR }/>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
    },
})

export default ImageButton;
