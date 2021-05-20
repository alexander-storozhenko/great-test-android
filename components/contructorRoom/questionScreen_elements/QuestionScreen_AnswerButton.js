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
    Animated
} from "react-native";
import {
    borderRadius, checkedColor, contrastColor, fontBold, h3, h4, lightColor, primaryColor
} from '../../StyleConstants';
import InputField from "../../ui/InputField";
import QuestionScreen_TrueAnswerButton from "./QuestionScreen_TrueAnswerButton";

class QuestionScreen_Answers extends Component {
    constructor(props) {
        super(props)
    }

    _opacity = new Animated.Value(0)

    componentDidMount() {
        Animated.timing(this._opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    _animateColor = () => {
        this._color = new Animated.Value(0)

        Animated.timing(this._color, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false
        }).start();
    };

    render() {
        this._animateColor()

        const color = this.props.selected ? this._color.interpolate({
            inputRange: [0, 1],
            outputRange: [contrastColor, checkedColor]
        }) : contrastColor

        return (
            <Animated.View style={[styles.container, {opacity: this._opacity}]}>
                <Animated.View style={[styles.btn, {backgroundColor: color}]}>

                    <TextInput onChangeText={(text) => this.props.onSetAnswerText(this.props.number, text)}
                               placeholder={'Answer'} style={{height: 40, fontSize: h3}}/>

                    <QuestionScreen_TrueAnswerButton onPress={() => this.props.onSelectTrue(this.props.number)}
                                                     number={this.props.number}/>

                </Animated.View>
            </Animated.View>
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
    }
})

export default connect(
    state => ({}),
    dispatch => ({
        onSetAnswerText: (number, data) => dispatch({
            type: 'CONSTRUCTOR/QUESTION/SET_ANSWER',
            payload: {number: number, text: data}
        }),
    })
)(QuestionScreen_Answers)
