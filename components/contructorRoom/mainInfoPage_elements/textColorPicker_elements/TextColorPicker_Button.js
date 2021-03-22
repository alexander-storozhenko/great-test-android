import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback, Animated
} from "react-native";

import {
    fontBold,
    fontMedium,
    h2,
    h3,
    h4,
    lightColor,
    titleColor,
    subTitleColor,
    titleColorLight,
    subTitleColorLight,
    primaryColor,
    borderRadius, contrastColor, secondaryColor
} from '../../../StyleConstants';
import {setColorTextBtn} from "../../../../actions/constructorActions/constructorAction";

class TextColorPicker_Button extends Component {
    constructor(props) {
        super(props)
        React.createRef()
        this.state = {clicked: false, size: new Animated.Value(1)}
    }

    reset = () => Animated.spring(this.state.size, {toValue: 1, useNativeDriver: true}).start();

    onClick = () => {

        this.props.onSetColor(this.props.id)
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        const value = this.props.clicked_id === this.props.id ? 1.2 : 1
        const borderColor = this.props.clicked_id === this.props.id ? contrastColor : secondaryColor
        Animated.spring(this.state.size, {toValue: value, useNativeDriver: true}).start();

        const style = {borderWidth: 2, borderColor: borderColor}
        return (
            <Animated.View>
                <TouchableWithoutFeedback onPress={() => this.onClick()}>
                    <Animated.View style={[styles.btn,style, {
                        backgroundColor: this.props.color,
                        transform: [{scale: this.state.size}]
                    }]}>

                    </Animated.View>
                </TouchableWithoutFeedback>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'red'
    },
})

export default connect(
    state => ({
        clicked_id: state.constructorColorTextBtnClicked
    }),
    dispatch => ({
        onSetColor: (btn_id) => dispatch(setColorTextBtn(btn_id)),
        onSetTestTemplateData: (data) => dispatch({type: 'TEST/SET_TEST_T_DATA', payload: data}),
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(TextColorPicker_Button);
