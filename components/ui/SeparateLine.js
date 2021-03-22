import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
} from "react-native";
import {lightColor} from "../StyleConstants";

class SeparateLine extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.line}/>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: lightColor,

    },
})

export default SeparateLine;
