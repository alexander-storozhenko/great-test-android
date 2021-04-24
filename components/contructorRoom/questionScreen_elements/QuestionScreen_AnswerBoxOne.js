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
    borderRadius, checkedColor, contrastColor, fontBold, h3, h4, lightColor, primaryColor
} from '../../StyleConstants';
import InputField from "../../ui/InputField";
import QuestionScreen_TrueAnswerButton from "./QuestionScreen_TrueAnswerButton";

class QuestionScreen_AnswerBoxOne extends Component {
    constructor(props) {
        super(props)
    }

    _select = () => {
        this.props.onSetAnswer(this.props.number)
    }

    render() {
        const selectedStyle = this.props.selectedId === this.props.number ? {backgroundColor: styles.selected} : null

        return (
            <View style={[styles.container, selectedStyle]}>

                    <View style={styles.btn}>

                            <TextInput placeholder={'Answer'} style={{height: 40, fontSize: h3}}/>

                            <QuestionScreen_TrueAnswerButton/>
                    </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 60,
        backgroundColor: contrastColor,
        borderRadius: borderRadius,
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 10,
        flexDirection: 'row'
    },
    selected: {
        backgroundColor: checkedColor
    },
    title: {
        fontFamily: fontBold,
        fontSize: h3,
    },
    text: {
        color: primaryColor,
        fontFamily: fontBold,
        fontSize: h3
    },
    container:{
        marginTop: 15,
    }
})

export default connect(
    state => ({
        selectedId: state.constructorSelectedBtnOne,
    }),
    dispatch => ({
        onSetAnswer: (number) => dispatch({type: 'CONSTRUCTOR/QUESTION/SET_ANSWER/ONE', payload: {number: number}})
    })
)(QuestionScreen_AnswerBoxOne);
