import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from "react-native";
import {
    borderRadius,
    errorColor,
    fontBold,
    h1_5,
    h3,
    h4,
    secondaryColor,
    secondColor,
    successColor
} from "../../StyleConstants";
import ArrowUp from "../../svg/ArrowUp";

const DURATION = 3000 //ms

class FinishScreen_PercentageLine extends Component {
    constructor(props) {
        super(props);
        this.state = {lineWidthAnim: new Animated.Value(0), positiveValue: 0}
        this.interval = null
    }

    percent = () => (Math.min(1, Math.max(0, this.props.percent)))

    animate = (containerWidth) => {
        const targetValue = this.percent() * containerWidth

        Animated.timing(this.state.lineWidthAnim,
            {
                toValue: targetValue,
                easing: Easing.in(Easing.bounce),
                duration: DURATION,
                useNativeDriver: true
            }).start();
    }

    componentDidMount() {
        let value = 0

        const intervalValue = Math.round(DURATION / (this.percent() + 0.01) / 100)

        this.interval = setInterval(() => {
            if (value >= this.percent() * 100)
                return clearInterval(this.interval)

            this.setState({positiveValue: ++value})
        }, intervalValue)
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
    }
})

export default FinishScreen_PercentageLine;
