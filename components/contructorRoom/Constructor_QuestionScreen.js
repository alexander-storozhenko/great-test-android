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
import QuestionScreen_Answers from "./questionScreen_elements/QuestionScreen_Answers";

class Constructor_QuestionScreen extends Component {
    constructor(props) {
        super(props)
    }

    title = ''
    subtitle = ''

    _saveQuestion = (finished) => {
        //TODO add img type, add answers type: some, n to n ...

        const type = this.props.route.params.type

        const data = {
            title_type: 'text',
            title: this.title,
            subtitle: this.subtitle,
            answers_type: [type, 'text'],
            answers: this.props.answers,
            true_answers:
                type === 'one' ? this.props.trueAnswersOne :
                type === 'some' ? this.props.trueAnswersSome : null,
            question_id: this.props.currentQuestionId,
            finished: finished,
        }

        this.props.onSaveQuestion(data)
    }

    render() {
        const type = this.props.route.params.type

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

                <QuestionScreen_Answers type={type}/>

                <View style={styles.next_btn_container}>
                    <BottomButton
                        onPress={() => this._saveQuestion(false)}>Далее</BottomButton>
                    <BottomButton
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
        answers: state.constructorSet,
        btnCount: state.constructorQuestionAnswerBtnsCount,
        currentQuestionId: state.constructorCurrentQuestionId,
        trueAnswersOne: state.constructorSelectOne,
        trueAnswersSome: state.constructorSelectSome,
    }),
    dispatch => ({
        onSetBtnCount: (cnt) => dispatch({type: 'CONSTRUCTOR/QUESTION/ANSWER_BTNS_COUNT', payload: cnt}),
        onSaveQuestion: (data) => dispatch(constructorSaveQuestionData(data))
    })
)(Constructor_QuestionScreen);
