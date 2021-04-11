import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated
} from "react-native";
import {borderRadius, contrastColor, primaryColor, secondColor} from '../StyleConstants';

const switchWidth = 80
const btnWidth = 40
const duration = 150

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {pressed: false, btnColor: primaryColor}
        this.btn = new Animated.Value(0);
    }

    componentDidMount() {
        if (this.props.on)
            this.changeState(0)
    }

    changeState = (duration) => {
        this.setState(
            {pressed: !this.state.pressed, btnColor: this.state.pressed ? primaryColor : contrastColor}
        )
        this.move(!this.state.pressed ? switchWidth - btnWidth : 0, duration)

    }

    onPress = () => {
        if (!this.state.pressed && this.props.actionOn)
            this.props.actionOn()
        else if(this.state.pressed && this.props.actionOff)
            this.props.actionOff()
    }

    move = (btnPosition, duration) => {
        Animated.timing(this.btn, {
            toValue: btnPosition,
            duration: duration,
            useNativeDriver: true,
        }).start();
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {
                    this.onPress()
                    this.changeState(duration)
                }}>
                    <View style={styles.switch}>
                        <Animated.View style={[styles.btn, {
                            backgroundColor: this.state.btnColor,
                            transform: [{translateX: this.btn}]
                        }]}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: switchWidth,
        height: 40,
        borderRadius: borderRadius,
        borderColor: secondColor,
        borderWidth: 2,
        position: 'relative',
        backgroundColor: primaryColor,
    },
    switch: {
        width: '100%',
        height: '100%',
    },
    btn: {
        position: 'absolute',
        width: 39,
        height: 39,
        borderRadius: borderRadius,
        borderColor: secondColor,
        borderWidth: 2,
        backgroundColor: contrastColor,
        top: -2,
        left: -2,
    }
})

export default Switch;
