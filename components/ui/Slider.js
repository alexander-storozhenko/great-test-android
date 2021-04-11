import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    PanResponder,
} from "react-native";

import {borderRadius, lightColor, secondaryColor} from "../StyleConstants";
import {Animated} from "react-native";

const LINE_LENGTH = 200
const SPIN_SIZE = 30

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    pan = new Animated.ValueXY({
        x: new Animated.Value(0),
        y: new Animated.Value(0)
    });

    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,

        onPanResponderGrant: () => {

            this.pan.setOffset({
                x: this.pan.x._value,
                y: this.pan.y._value
            });
        },

        onPanResponderMove: Animated.event([
            null,
            {dx: this.pan.x, dy: this.pan.y},
        ]),

        onPanResponderRelease: () => {
            this.pan.flattenOffset();
            // this.direction = this.pan.y._value < CONTAINER_HEIGHT - CLOSE_STATE_LENGTH ? this.open() : this.close()
        }
    });

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.line}/>
                <Animated.View style={[styles.spin, {
                    transform: [{translateY: 0}, {
                        translateX: this.pan.x.interpolate({
                            inputRange: [0, LINE_LENGTH - SPIN_SIZE],
                            outputRange: [0, LINE_LENGTH - SPIN_SIZE],
                            extrapolate: 'clamp'
                        })
                    }]
                }]} {...this.panResponder.panHandlers}>
                </Animated.View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        height: 2,
        width: LINE_LENGTH,
        backgroundColor: secondaryColor
    },
    spin: {
        position: 'absolute',
        width: SPIN_SIZE,
        height: SPIN_SIZE,
        backgroundColor: 'red',
        borderRadius: SPIN_SIZE/2,
        bottom: 15
    },
    container: {
        height: SPIN_SIZE,
        marginTop:100
    }
})

export default Slider;
