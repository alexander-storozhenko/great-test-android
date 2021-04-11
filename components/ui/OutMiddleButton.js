import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableNativeFeedback
} from "react-native";
import {
    borderRadius,
    fontBold,
    h4,
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
