import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    PanResponder,
} from "react-native";

import {borderRadius, lightColor, secondaryColor} from "../StyleConstants";
import {Animated} from "react-native";

const CONTAINER_HEIGHT = 500
const DURATION = 300

class Backdrop extends Component {
    constructor(props) {
        super(props);
    }

    pan = new Animated.ValueXY({
        x: new Animated.Value(0),
        y: new Animated.Value(CONTAINER_HEIGHT)
    });

    close = () => {
        this.props.onChange(false)
        Animated.timing(this.pan, {toValue: {x: 0, y: CONTAINER_HEIGHT}, duration: DURATION}).start()
    }

    open = () => {
        this.props.onChange(true)
        Animated.timing(this.pan, {toValue: {x: 0, y: 0}, duration: DURATION}).start()
    }

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
            this.direction = this.pan.y._value < CONTAINER_HEIGHT / 3 ? this.open() : this.close()

        }
    });

    render() {
        this.props.open ? this.open() : this.close()

        return (
            <View>
                <Animated.View
                    style={{
                        width: '100%',
                        opacity: this.pan.y.interpolate({
                            inputRange: [0, CONTAINER_HEIGHT],
                            outputRange: [1, 0],
                        }),
                        transform: [{translateX: 0}, {
                            translateY: this.pan.y.interpolate({
                                inputRange: [0, CONTAINER_HEIGHT],
                                outputRange: [0, CONTAINER_HEIGHT],
                                extrapolate: 'clamp'
                            })
                        }]
                    }}
                    {...this.panResponder.panHandlers}>
                    <View>
                        <View style={styles.dropbox}>

                            <View style={styles.line_container}>
                                <View style={styles.line}/>
                            </View>

                            <View style={styles.content}>
                                {this.props.children}
                            </View>

                        </View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line_container: {
        width: '100%',
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: 5,
        width: 30,
        borderRadius: borderRadius,
        backgroundColor: secondaryColor
    },
    dropbox: {
        height: CONTAINER_HEIGHT,
        width: '100%',
        borderRadius: 5,
        backgroundColor: lightColor
    },
    content: {
        width: '100%',
        height: '100%',
        padding: 5
    }
})

export default Backdrop;
