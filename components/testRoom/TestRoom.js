import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';
import TestRoom_OneButton from './elements/TestRoom_OneButton'
import TestOne from '../svg/TestOne';
import {fontBold, h1, h1_5, h2, navHeight, secondaryColor} from '../StyleConstants';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
// import TestRoom_NavButton from './elements/TestRoom_NavButton';
import TestRoom_NavNextButton from './elements/TestRoom_NavNextButton';

import {getQuestion} from '../../actions/questionsAction';
import {setDefaultUserAnswers} from "../../actions/answersAction";
import TimerLine from "../timer/TimerLine";

class TestRoom extends Component {
    constructor(props) {
        super(props)
        this.state = { start_loading: true }
    }

    render() {
        let data = {
            answers: [],
            title: '',
        }

        const test_id = this.props.route.params.test_id
        const question_number = this.props.question_number
        const user_data = this.props.user_answers[question_number]?.data
        const active = !user_data ? {} : user_data

        if (!this.props.loading && this.props.questionData) {
            data.answers = this.props.questionData.data.answers
            data.title = this.props.questionData.data.text
        }

        return (
            <View>
                {this.props.loading ?
                    <ActivityIndicator size="small" color={secondaryColor}/> :
                    <View style={{width: '100%', height: '100%', position: 'relative'}}>
                        <TimerLine
                            start_time={30}
                            test_id={test_id}
                            navigation={this.props.navigation}

                        />
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.content}>
                            <View style={styles.answers_block}>
                                <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                                    {
                                        Object.entries(data.answers)
                                            .map(([key, value]) =>
                                                <TestRoom_OneButton
                                                    test_id={test_id}
                                                    id={key}
                                                    key={key}
                                                    active={active[key]}>
                                                    {value}
                                                </TestRoom_OneButton>)
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={{position: 'absolute', bottom: 15, width: '100%'}}>
                            <TestRoom_NavNextButton test_id={this.props.route.params.test_id}
                                                    navigation={this.props.navigation}/>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    answers_block: {
        width: '100%',
        // height: '100%',
        marginTop: 40,
        justifyContent: 'center',

        // alignItems:'s',
        // backgroundColor:'red',
        // marginBottom:120
    },
    content: {
        width: '100%',

        position: 'relative',

    },
    title: {
        marginTop: 20,
        // marginBottom:20,
        fontSize: h1_5,
        fontFamily: fontBold,
        textAlign: 'center',
    }

})
export default connect(
    state => ({
        questionData: state.question,
        question_number: state.questionNumber,
        loading: state.questionLoading,
        user_answers: state.user_answers,
    }),
    dispatch => ({
        setDefaultUserAnswers: (answers, test_id, question_id) => dispatch(setDefaultUserAnswers(answers, test_id, question_id)),
        callLoading: ()=> dispatch({type: 'QUESTION/GET_PROGRESS'})
    }))(TestRoom);
