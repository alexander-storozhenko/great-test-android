import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet, Text,
} from "react-native";
import {
    checkedColor,
    contrastColor,
    fontBold,
    h2, h3,
    primaryColor
} from '../../../StyleConstants';

class QuestionTypeBoxOne_Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[{...styles.btn}, {backgroundColor: this.props.selected ? checkedColor : contrastColor}]}>
                <Text style={styles.btn_text}>{this.props.children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: 170,
        minHeight: 50,
        borderRadius: 10,
        elevation: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    btn_text: {
        color: primaryColor,
        fontFamily: fontBold,
        fontSize: h3,
    }
})

export default connect(
    null,
    dispatch => ({})
)(QuestionTypeBoxOne_Button);
