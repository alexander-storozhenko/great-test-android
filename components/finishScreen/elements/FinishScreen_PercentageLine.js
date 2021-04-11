import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from "react-native";
import {
    borderRadius,
    errorColor,
    h3,
    secondaryColor,
    successColor
} from "../../StyleConstants";
import ArrowUp from "../../svg/ArrowUp";

const DURATION = 3000 //ms

class FinishScreen_PercentageLine extends Component {
    constructor(props) {
        super(props);
        this.state = {lineWidthAnim: new Animated.Value(0), positiveValue: 0, trueAnswers: 0}
        this.intervalAnswers = null
        this.intervalPercents = null
    }

    percent = (this.props.trueValue / this.props.allValue)

    animate = (containerWidth) => {
        const targetValue = this.percent * containerWidth
        Animated.timing(this.state.lineWidthAnim,
            {
                toValue: targetValue,
                easing: Easing.in(Easing.bounce),
                duration: DURATION,
                useNativeDriver: true
            }).start();
    }

    componentDidMount() {
        let percentsValue = 0
        let trueAnswersValue = 0

        const intervalPercentsValue = Math.round(DURATION / (this.percent + 0.01) / 100)
        const intervalTrueAnswersValue = Math.round(DURATION / (this.props.trueValue + 0.01) )

        this.intervalPercents = setInterval(() => {
            if (percentsValue >= this.percent * 100)
                return clearInterval(this.intervalPercents)

            this.setState({positiveValue: ++percentsValue})
        }, intervalPercentsValue)

        this.intervalAnswers = setInterval(() => {
            if (trueAnswersValue >= this.props.trueValue)
                return clearInterval(this.intervalAnswers)

            this.setState({trueAnswers: ++trueAnswersValue})
        }, intervalTrueAnswersValue)
    }


    render() {

        return (
            <View>
                <View style={styles.container} onLayout={(event) => {
                    this.animate(event.nativeEvent.layout.width)
                }}>
                    <Animated.View
                        style={[styles.negative_line, {transform: [{translateX: this.state.lineWidthAnim}]}]}/>

                </View>
                <View style={styles.answers_text_container}>
                    <Text style={styles.answers_text}>{this.state.trueAnswers}/{this.props.allValue}</Text>
                </View>
                <Animated.View style={{transform: [{translateX: this.state.lineWidthAnim}]}}>
                    <ArrowUp fill={secondaryColor} style={styles.positive_arrow}/>
                    <View style={styles.text_container}>
                        <Text style={styles.positive_percent}>{this.state.positiveValue}%</Text>
                    </View>
                </Animated.View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    negative_line: {
        width: '100%',
        height: '100%',
        backgroundColor: errorColor,
        position: 'relative',
    },
    container: {
        overflow: 'hidden',
        width: '100%',
        height: 40,
        position: 'relative',
        backgroundColor: successColor,
        borderRadius: borderRadius
    },

    text_container: {
        width: 50,
        height: 40,
        position: 'absolute',
        zIndex: 99,
        bottom: -60,
        left: -20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    positive_arrow: {
        position: 'absolute',
        bottom: -25,
        left: -10,
        zIndex: 99,
        width: 20,
        height: 20,
    },
    positive_percent: {
        fontSize: h3,
    },
    answers_text_container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    answers_text:{
        fontSize: h3,
        color: 'white'
    }

})

export default FinishScreen_PercentageLine;
