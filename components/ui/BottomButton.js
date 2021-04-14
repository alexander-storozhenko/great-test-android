import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableNativeFeedback
} from "react-native";
import {borderRadius, contrastColor, disableColor, h3, primaryColor} from "../StyleConstants";


class BottomButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.btn, this.props.disable ? styles.disabled : null ]}>
                <TouchableNativeFeedback onPress={()=> !this.props.disable ? this.props.onPress(): null } >
                    <View>
                        <Text style={[styles.btn_text, this.props.disable ? styles.btn_text_disabled : null]}>{this.props.children}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        position:'relative',
        borderRadius: borderRadius,
        backgroundColor: contrastColor,
        elevation:5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn_text:{
        color: primaryColor,
        fontSize: h3,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    },
    disabled: {
        backgroundColor: disableColor,
    },
    btn_text_disabled: {
        // color: disableColor
    }
})

export default BottomButton;
