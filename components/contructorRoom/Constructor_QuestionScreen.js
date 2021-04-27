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
import {constructorSendQuestionParams} from "../../actions/constructorActions/constructorAction";
import QuestionScreen_AddNewAnswerButton from "./questionScreen_elements/QuestionScreen_AddNewAnswerButton";
import {constructorQuestionAnswerBtnsCount} from "../../reducers/constructorReducers/questionReducer";

class Constructor_QuestionScreen extends Component {
    constructor(props) {
        super(props)
    }

    answerButtons = () => {
        return Array.from(Array(this.props.btnCount)).map((_, i) => (<QuestionScreen_AnswerBoxOne number={i + 1}/>))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_row}>
                    <View style={styles.input_container}>
                        <InputField placeholder={'title'} style={styles.input}/>
                    </View>
                    <View style={styles.img_btn_container}>
                        <ImageButton style={styles.input}/>
                    </View>
                </View>

                <View style={styles.description_row}>
                    <View style={{flex: 1}}>
                        <InputField placeholder={'description'} style={styles.input}/></View>
                </View>

                <ScrollView showsVerticalScrollIndicator={true} style={{flex: 1, marginTop: 15, marginBottom: 20}}>
                    <View style={[styles.answers, {height: (this.props.btnCount + 2) * 75}]}>
                        {this.answerButtons()}
                        <QuestionScreen_AddNewAnswerButton/>
                    </View>
                </ScrollView>
                <View style={styles.next_btn_container}>
                    <View style={styles.next_btn}>

                        <BottomButton disable={!this.props.selectedId} onPress={() => {
                        }}>
                            {this.props.selectedId ? 'Далее' : 'Выберете вариант ответа'}
                        </BottomButton>

                    </View>
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
        bottom: 10,
        width: '100%',
    },
    next_btn: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
})

export default connect(
    state => ({
        selectedId: state.constructorSelectedBtnOne,
        btnCount: state.constructorQuestionAnswerBtnsCount
    }),
    dispatch => ({
        onSetBtnCount: (cnt) => dispatch({type: 'CONSTRUCTOR/QUESTION/ANSWER_BTNS_COUNT', payload: cnt})
    })
)(Constructor_QuestionScreen);
