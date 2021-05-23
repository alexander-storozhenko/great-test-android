import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet} from "react-native";
import {
    checkedColor,
    contrastColor, disableColor,
    fontBold,
    h2,
    h3,
    lightColor,
    primaryColor,
    secondaryColor
} from '../../StyleConstants';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {sendAnswers} from '../../../actions/answersAction';
import {decreaseQuestionNumber, getQuestion, increaseQuestionNumber} from '../../../actions/questionsAction';

class TestRoom_NavNextButton extends Component {
    constructor(props) {
        super(props)
        this.state = {pressed: false}
    }

    onPress = () => {
        if (!this.props.disable)
            this.props.onPress()
    }

    render() {
        return (
                <View style={styles.container}>
                    <View style={[this.props.disable ? styles.disable_btn : styles.enable_btn, styles.next,]}>
                        <TouchableNativeFeedback onPress={this.onPress} style={{width: '100%', height: '100%'}}>
                            <View style={styles.text_container}>
                                <Text style={this.props.disable ? styles.disable_text : styles.enable_text}>
                                    {this.props.disable ? 'sending answers...' : 'next'}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    enable_btn: {
        height: '100%',
        borderRadius: 10,
        borderColor: secondaryColor,
        borderWidth: 2
    },
    disable_btn: {
        height: '100%',
        borderRadius: 10,
        borderColor: disableColor,
        borderWidth: 2
    },
    text_container: {
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    enable_text: {
        color: secondaryColor,
        fontFamily: fontBold,
        fontSize: h3,
        textTransform: 'uppercase'
    },
    disable_text: {
        color: disableColor,
        fontFamily: fontBold,
        fontSize: h3,
        textTransform: 'uppercase'
    },
    next: {
        width: '100%'
    }
})

export default connect(
    state => ({
        user_answers: state.userAnswers,
        question_number: state.questionNumber,
        question_count: state.questionCount,
    }),
    dispatch => ({
        onGetTestResults: (test_id, navigation) => dispatch(getTestResults(test_id, navigation)),
        onIncreaseQuestionNumber: () => dispatch({type: 'QUESTION/INCREASE_NUMBER'}),
        onGetQuestion: (test_id, question_number, navigation) => dispatch(getQuestion(test_id, question_number, navigation)),
    })
)(TestRoom_NavNextButton);
