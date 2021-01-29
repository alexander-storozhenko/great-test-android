import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from "react-native";
import { checkedColor, contrastColor, fontBold, h2, h3, primaryColor, secondaryColor } from '../../StyleConstants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { sendAnswers } from '../../../actions/answersAction';
import { decreaseQuestionNumber, increaseQuestionNumber } from '../../../actions/questionsAction';

class TestRoom_NavButton extends Component {
    constructor(props) {
        super(props)
        this.state = { pressed: false }
    }

    onPrev = () => {
        this.props.onDecreaseQuestionNumber();
        this.props.navigation.goBack()
    }

    onNext = () => {
        
        this.props.onSendAnswers(this.props.answers, this.props.test_id)
        this.props.onIncreaseQuestionNumber()
        this.props.navigation.push('Test', { test_id: this.props.test_id })
    }

    render() {
        console.log(this.props.questionNumber)

        return (
            <View style={{ alignItems: 'flex-end', height: 65 }}>
                <View style={styles.container}>
                    <View style={[styles.button, styles.prev]}>
                        <TouchableNativeFeedback onPress={() => this.onPrev()}>
                            <View style={styles.text_container}>
                                <Text style={styles.text}>prev</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={[styles.button, styles.next]}>
                        <TouchableNativeFeedback onPress={() => this.onNext()} style={{ width: '100%', height: '100%' }}>
                            <View style={styles.text_container}>
                                <Text style={styles.text}>next</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
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
    button: {
        height: '100%',
        borderRadius: 10,
        borderColor: secondaryColor,
        borderWidth: 2
    },
    text_container: {
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: fontBold,
        fontSize: h3,
        textTransform: 'uppercase'
    },
    prev: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: '40%'
    },
    next: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0,
        width: '60%'
    }
})

export default connect(
    state => ({
        userAnswers: state.userAnswers,
        questionNumber: state.questionNumber
    }),
    dispatch => ({
        onDecreaseQuestionNumber: () => dispatch({type: 'QUESTION/DECREASE_NUMBER'}),
        onIncreaseQuestionNumber: () => dispatch({type: 'QUESTION/INCREASE_NUMBER'}),
        
        onSendAnswers: (userAnswers, question_id) => dispatch(sendAnswers(userAnswers, question_id))
    })
)(TestRoom_NavButton);
