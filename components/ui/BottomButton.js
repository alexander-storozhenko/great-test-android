import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableNativeFeedback
} from "react-native";
import {borderRadius, contrastColor, h3, primaryColor} from "../StyleConstants";


class BottomButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.btn}>
                <TouchableNativeFeedback onPress={()=> this.props.onPress()} >
                    <View>
                        <Text style={styles.btn_text}>{this.props.children}</Text>
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
    },
    btn_text:{
        color: primaryColor,
        fontSize: h3,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    }
})

export default BottomButton;
