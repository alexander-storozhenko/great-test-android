import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Animated, Text, Dimensions, StyleSheet } from "react-native";

class MovableContent extends Component {

    DURATION = 200

    constructor(props) {
        super(props)
        this.sidebarAnimation = new Animated.Value(0);
    }

    openSidebar = () => {
        Animated.timing(this.sidebarAnimation, {
            toValue: 1,
            duration: this.DURATION,
            useNativeDriver: true,
        }).start();
    };

    closeSidebar = () => {
        Animated.timing(this.sidebarAnimation, {
            toValue: 0,
            duration: this.DURATION,
            useNativeDriver: true,
        }).start();
    };

    render() {
        if (this.props.move)
            this.openSidebar()
        else
            this.closeSidebar()

        const xVal = this.sidebarAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, width / 1.3],
        });

        const animStyle = {
            transform: [
                {
                    translateX: xVal,
                },
            ],
        };
        return (
            <Animated.View style={[styles.sidebar, animStyle]}>
                {this.props.children}
            </Animated.View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        width: width - 15,
        minHeight: 40,
        backgroundColor: "red"
    },
})

export default connect(
  state => ({
    move: state.move
  }), null)(MovableContent);
