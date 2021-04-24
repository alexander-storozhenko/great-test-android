import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import {h3} from '../StyleConstants';
import InputField from "../ui/InputField";
import ImageButton from "../ui/ImageButton";
import QuestionScreen_AnswerBoxOne from "./questionScreen_elements/QuestionScreen_AnswerBoxOne";

class Constructor_QuestionScreen extends Component {
    constructor(props) {
        super(props)
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

                <View style={styles.answers}>
                    <QuestionScreen_AnswerBoxOne number={1}/>
                    <QuestionScreen_AnswerBoxOne number={2}/>
                    <QuestionScreen_AnswerBoxOne number={3}/>
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
    answers: {
        marginTop: 40,
    }
})

export default connect(
    null,
    dispatch => ({})
)(Constructor_QuestionScreen);
