import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { fontMedium, h3, lightColor, contrastColor } from '../../StyleConstants';

class MiniTest_Button extends Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
    }

    _click() {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        return (
            <TouchableHighlight style={styles.button} onPress={() => {
                this._click()
                this.props.onPress()
            }}>
                <Text style={styles.button_text}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: contrastColor,
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
        elevation: 5,
    },

    button_text: {
        textAlign: 'center',
        fontSize: h3,
        fontFamily: fontMedium,
        color:lightColor

    }
})

export default MiniTest_Button;
