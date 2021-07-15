import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import {answerBtnWidth, checkedColor, contrastColor, fontBold, h2, primaryColor} from '../../../StyleConstants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {selectN2NBtn, storeUserAnswer} from "../../../../actions/answersAction";
import {ImageBackground} from "react-native-web";
import {rootPath} from "../../../../lib/Requests";

const BREAK_LENGTH = 25
const BIG_SIZE = 310
const SMALL_SIZE = answerBtnWidth

class TestRoom_Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const textSize = this.props.children.text?.length
        const backgroundColor = this.props.checked ? checkedColor : contrastColor

        if(this.props.type === 'text') {
            return (
                <View>
                    <TouchableWithoutFeedback onPress={() => this.onClick()}
                                              style={
                                                  {
                                                      ...styles.button,
                                                      width: textSize > BREAK_LENGTH ? BIG_SIZE : SMALL_SIZE,
                                                      backgroundColor: backgroundColor
                                                  }
                                              }
                    >
                        <ImageBackground source={{uri: rootPath(this.props.image_url ) }}/>
                        <Text style={styles.button_text}>{this.props.text}</Text>
                    </TouchableWithoutFeedback>
                </View>
            )
        }
        else if(this.props.type === 'img') {

        }
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

export default connect(
    state => ({
        question_number: state.questionNumber,
        user_answers: state.userAnswers,
        answersSendLoading: state.answersSendProgress,
        colorMap: state.answersColorN2NMap,
    }),
    dispatch => ({
        selectBtn: (answer_id, pos, answers_color_map) => dispatch(selectN2NBtn(answer_id, pos, answers_color_map)),
        storeAnswers: (type, value, answer_id, test_id, question_number) =>
            dispatch(storeUserAnswer(type, value, answer_id, test_id, question_number))
    }))(TestRoom_Button);
