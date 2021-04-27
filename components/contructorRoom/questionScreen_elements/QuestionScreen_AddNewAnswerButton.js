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
    Animated, Easing
} from "react-native";
import {
    borderRadius, checkedColor, contrastColor, fontBold, h3, h4, lightColor, primaryColor, secondaryColor
} from '../../StyleConstants';
import InputField from "../../ui/InputField";
import QuestionScreen_TrueAnswerButton from "./QuestionScreen_TrueAnswerButton";

const OFFSET_VALUE = 100
const DURATION = 400

class QuestionScreen_AddNewAnswerButton extends Component {
    constructor(props) {
        super(props)
        this.state = {offset: new Animated.Value(this.props.btnCount * 75,)}
    }

    onPress = () => {
        if (this.props.disabled)
            return

        Animated.timing(this.state.offset, {
            toValue: (this.props.btnCount + 1) * 75,
            duration: DURATION,
        }).start(() => {
            this.setState({offset: new Animated.Value((this.props.btnCount + 1) * 75)})
            this.props.onSetBtnCount(this.props.btnCount + 1)
        })
    }

    render() {
        return (
            <View style={styles.btn_container}>
            <Animated.View style={{transform: [{translateY: this.state.offset}]}}>

                <TouchableNativeFeedback onPress={this.onPress}  >
                    <View style={styles.btn}>
                        <Text style={styles.text}>+</Text>
                    </View>
                </TouchableNativeFeedback>

            </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn_container:{
        position: 'absolute',

        width: '100%',
        marginTop: 15,
    },
    btn: {



        height: 60,
        borderRadius: borderRadius,
        borderWidth: 2,
        borderColor: secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: secondaryColor,
        fontFamily: fontBold,
        fontSize: 35
    },
})

export default connect(
    state => ({
        selectedId: state.constructorSelectedBtnOne,
        btnCount: state.constructorQuestionAnswerBtnsCount
    }),
    dispatch => ({
        onSetAnswer: (number) => dispatch({type: 'CONSTRUCTOR/QUESTION/SET_ANSWER/ONE', payload: {number: number}}),
        onSetBtnCount: (cnt) => dispatch({type: 'CONSTRUCTOR/QUESTION/ANSWER_BTNS_COUNT', payload: cnt})
    })
)(QuestionScreen_AddNewAnswerButton);
