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
    Animated, ScrollView
} from "react-native";
import {
    borderRadius, checkedColor, contrastColor, fontBold, h3, h4, lightColor, primaryColor
} from '../../StyleConstants';
import InputField from "../../ui/InputField";
import QuestionScreen_TrueAnswerButton from "./QuestionScreen_TrueAnswerButton";
import QuestionScreen_AddNewAnswerButton from "./QuestionScreen_AddNewAnswerButton";
import QuestionScreen_AnswerBoxOne from "./QuestionScreen_AnswerBoxOne";
import QuestionScreen_AnswerBoxSome from "./QuestionScreen_AnswerBoxSome";

class QuestionScreen_Answers extends Component {
    constructor(props) {
        super(props)
    }

    answerButtons = () => {
        switch (this.props.type) {
            case 'one':
                return Array.from(Array(this.props.btnCount)).map((_, i) =>
                    (<QuestionScreen_AnswerBoxOne number={i + 1}/>))
            case 'some':
                return Array.from(Array(this.props.btnCount)).map((_, i) =>
                    (<QuestionScreen_AnswerBoxSome number={i + 1}/>))
        }
    }

    render() {
        const answers = this.answerButtons()

        return (
            <ScrollView showsVerticalScrollIndicator={true} style={{flex: 1, marginTop: 15, marginBottom: 20}}>
                {/*calc answers size + paddings + add new answer btn size */}
                <View style={{height: (answers.length + 1) * 75}}>
                    {answers}
                    <QuestionScreen_AddNewAnswerButton/>
                </View>
            </ScrollView>
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
    container: {
        marginTop: 15,
    },
    answers: {
        flex: 1,
        height: '100%'
    }
})

export default connect(
    state => ({
        selectedNumber: state.constructorSet,
        btnCount: state.constructorQuestionAnswerBtnsCount,
    }),
    dispatch => ({
    })
)(QuestionScreen_Answers);
