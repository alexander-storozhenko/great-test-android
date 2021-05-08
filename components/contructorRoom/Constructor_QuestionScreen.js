import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet, Animated, ScrollView,
} from "react-native";
import {h3} from '../StyleConstants';
import InputField from "../ui/InputField";
import ImageButton from "../ui/ImageButton";
import QuestionScreen_AnswerBoxOne from "./questionScreen_elements/QuestionScreen_AnswerBoxOne";
import BottomButton from "../ui/BottomButton";
import {navigate} from "../../lib/NavigationService";
import {
    constructorSaveQuestionData,
    constructorSendQuestionParams
} from "../../actions/constructorActions/constructorAction";
import QuestionScreen_AddNewAnswerButton from "./questionScreen_elements/QuestionScreen_AddNewAnswerButton";
import {constructorQuestionAnswerBtnsCount} from "../../reducers/constructorReducers/questionReducer";

class Constructor_QuestionScreen extends Component {
    constructor(props) {
        super(props)
    }

    answerButtons = () => {
        return Array.from(Array(this.props.btnCount)).map((_, i) =>
            (<QuestionScreen_AnswerBoxOne onChangeText={(text) => this.answers[i] = text} number={i + 1}/>))
    }

    title = ''
    subtitle = ''
    answers = {}

    _saveQuestion = (finished) => {
        //TODO add img type, add answers type: some, n to n ...
        const data = {
            title_type: 'text',
            title: this.title,
            subtitle: this.subtitle,
            answers_type: ['one', 'text'],
            answers: this.answers,
            true_answers: [this.props.selectedNumber - 1],
            question_id: this.props.currentQuestionId,
            finished: finished,
        }

        this.props.onSaveQuestion(data)
    }

    render() {
        console.log(this.props.currentQuestionId)
        return (
            <View style={styles.container}>
                <View style={styles.title_row}>
                    <View style={styles.input_container}>
                        <InputField placeholder={'title'} style={styles.input}
                                    onChangeText={(text) => this.title = text}/>
                    </View>
                    <View style={styles.img_btn_container}>
                        <ImageButton style={styles.input}/>
                    </View>
                </View>

                <View style={styles.description_row}>
                    <View style={{flex: 1}}>
                        <InputField placeholder={'description'} style={styles.input}
                                    onChangeText={(text) => this.subtitle = text}/></View>
                </View>

                <ScrollView showsVerticalScrollIndicator={true} style={{flex: 1, marginTop: 15, marginBottom: 20}}>
                    <View style={[styles.answers, {height: (this.props.btnCount + 2) * 75}]}>
                        {this.answerButtons()}
                        <QuestionScreen_AddNewAnswerButton/>
                    </View>
                </ScrollView>
                <View style={styles.next_btn_container}>
                    <BottomButton disable={!this.props.selectedNumber}
                                  onPress={() => this._saveQuestion(false)}>Далее</BottomButton>
                    <BottomButton disable={!this.props.selectedNumber}
                                  onPress={() => this._saveQuestion(true)}>Завершить</BottomButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingTop: 20,
    },
    input_container: {
        flex: 1
    },
    input: {
        height: 40
    },
    img_btn_container: {
        paddingLeft: 15,
    },
    title_row: {
        flexDirection: 'row',
        width: 300,
        alignSelf: 'center'
    },
    description_row: {
        flexDirection: 'row',
        width: 300,
        alignSelf: 'center',

    },
    answers_container: {
        // flex: 1
    },
    next_btn_container: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 10,
        width: '100%',
    },
    next_btn: {
        position: 'relative',
        width: '100%',
        // flexDirection: 'row',
        // justifyContent: 'center'
    },
})

export default connect(
    state => ({
        selectedNumber: state.constructorSelectedBtnOne,
        btnCount: state.constructorQuestionAnswerBtnsCount,
        currentQuestionId: state.constructorCurrentQuestionId,
    }),
    dispatch => ({
        onSetBtnCount: (cnt) => dispatch({type: 'CONSTRUCTOR/QUESTION/ANSWER_BTNS_COUNT', payload: cnt}),
        onSaveQuestion: (data) => dispatch(constructorSaveQuestionData(data))
    })
)(Constructor_QuestionScreen);
