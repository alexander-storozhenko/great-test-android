import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableNativeFeedback,
    TextInput
} from "react-native";
import {
    borderRadius, checkedColor, contrastColor, fontBold, h3, lightColor, primaryColor, successColor
} from '../../StyleConstants';
import InputField from "../../ui/InputField";

class QuestionScreen_TrueAnswerButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const selectedStyle = this.props.selectedId === this.props.number ? {backgroundColor: styles.selected} : null

        return (
            <View style={[styles.container, selectedStyle]}>
                <TouchableNativeFeedback>
                    <View style={styles.btn}>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: successColor,
        borderRadius: borderRadius,
    },
})

export default connect(
    state => ({
        selectedId: state.constructorSelectedBtnOne,
    }),
    dispatch => ({
        onSetAnswer: (number) => dispatch({type: 'CONSTRUCTOR/QUESTION/SET_ANSWER/ONE', payload: {number: number}})
    })
)(QuestionScreen_TrueAnswerButton);
