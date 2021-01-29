import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet, Dimensions } from "react-native";
import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';
import TestRoom_OneButton from './elements/TestRoom_OneButton'
import TestOne from '../svg/TestOne';
import { fontBold, h1, h1_5, h2, navHeight } from '../StyleConstants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import TestRoom_NavButton from './elements/TestRoom_NavButton';
import { getQuestion } from '../../actions/questionsAction';

class TestRoom extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onGetQuestion(this.props.route.params.test_id, this.props.question_number)
        console.log("test_id " + this.props.route.params.test_id)
    }

    render() {
        let data = {
            answers: [],
            title: '',
        }

        if (!this.props.loading && this.props.questionData) {
            data.answers = this.props.questionData.data.answers
            data.title = this.props.questionData.data.text
        }

        console.log(data.answers)

        return (
            <View>
                { this.props.loading ?
                    <Text>loading</Text> :
                    <View style={{ width: '100%', height: '100%', position: 'relative' }}>

                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.content}>
                            <View style={styles.answers_block}>
                                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                                    { Object.entries(data.answers).map(([key, value]) => <TestRoom_OneButton key={key}>{value}</TestRoom_OneButton>)}
                                </View>
                            </View>
                        </View>
                        <View style={{ position: 'absolute', bottom: 15, width: '100%' }}>
                            {
                                // thisprops.questionNumber > 0
                                    <TestRoom_NavButton test_id={this.props.route.params.test_id} navigation={this.props.navigation} />
                                    
                            }
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
    }),
    dispatch => ({
        onGetQuestion: (test_id, question_number) => dispatch(getQuestion(test_id, question_number))
    }))(TestRoom);
