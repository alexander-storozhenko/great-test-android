import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    Text, TouchableNativeFeedback
} from "react-native";
import {
    borderRadius,
    contrastColor,
    fontBold,
    h3,
    h4,
    lightColor,
    primaryColor,
    secondaryColor
} from "../StyleConstants";


class OutMiddleButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.btn}>
                <TouchableNativeFeedback onPress={this.props.onPress}>
                    <View>
                        <Text style={styles.btn_text}>{this.props.children}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn:{
        borderRadius: borderRadius,
        borderWidth: 2,
        borderColor: secondaryColor,
        alignSelf: "flex-start"
    },
    btn_text:{
        position:'relative',
        color: secondaryColor,
        fontSize: h4,
        padding:5,
        fontFamily: fontBold,

    }
})

export default OutMiddleButton;
