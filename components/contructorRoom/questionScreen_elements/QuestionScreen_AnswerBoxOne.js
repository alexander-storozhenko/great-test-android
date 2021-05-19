import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableNativeFeedback,
    TextInput,
    Animated
} from "react-native";
import {
    borderRadius, checkedColor, contrastColor, fontBold, h3, h4, lightColor, primaryColor
} from '../../StyleConstants';
import InputField from "../../ui/InputField";
import QuestionScreen_TrueAnswerButton from "./QuestionScreen_TrueAnswerButton";
import QuestionScreen_AnswerButton from "./QuestionScreen_AnswerButton";

class QuestionScreen_AnswerBoxOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <QuestionScreen_AnswerButton number={this.props.number} selected={this.props.selectedId === this.props.number}/>
    }
}

export default connect(
    state => ({
        selectedId: state.constructorSelectOne,
    }),
    dispatch => ({})
)(QuestionScreen_AnswerBoxOne);
