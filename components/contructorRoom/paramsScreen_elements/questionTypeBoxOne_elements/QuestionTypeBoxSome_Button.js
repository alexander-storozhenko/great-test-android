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

class QuestionTypeBoxSome_Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.circle, this.props.selected ? styles.selected_circle : null]}/>
                <View style={[{...styles.btn}, {backgroundColor: this.props.selected ? checkedColor : contrastColor}]}>
                    <Text style={styles.btn_text}>{this.props.children}</Text>
                </View>
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
        alignSelf: 'center'
    },
    btn_text: {
        color: primaryColor,
        fontFamily: fontBold,
        fontSize: h3,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    circle: {
        marginRight: 20,
        borderRadius: 15,
        width: 15,
        height: 15,
        backgroundColor: contrastColor
    },
    selected_circle: {
        backgroundColor: checkedColor
    }
})

export default connect(
    null,
    dispatch => ({})
)(QuestionTypeBoxSome_Button);
