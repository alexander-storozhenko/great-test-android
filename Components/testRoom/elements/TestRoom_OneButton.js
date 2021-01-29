import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from "react-native";
import { checkedColor, contrastColor, fontBold, h2, primaryColor, secondaryColor } from '../../StyleConstants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class TestRoom_OneButton extends Component {
    constructor(props) {
        super(props)
        this.state = { pressed: false }
    }

    onClick = () => {
        this.setState({ pressed: !this.state.pressed })
        console.log(this.state.pressed)
    }

    render() {
        const backgroundColor = this.state.pressed ? checkedColor : contrastColor
        return (
            <View style={{ marginTop: 15 }}>
                <TouchableWithoutFeedback onPress={() => this.onClick()} style={{ ...styles.button, backgroundColor: backgroundColor }}>
                    <Text style={styles.button_text}>{this.props.children}</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        minHeight: 60,
        borderRadius: 10,
        elevation: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_text: {
        color: primaryColor,
        fontFamily: fontBold,
        fontSize: h2,
    }
})

export default TestRoom_OneButton;
