import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    TouchableNativeFeedback, Animated
} from "react-native";
import {borderRadius, lightColor} from "../../../StyleConstants";
import TestCard_Card from "./test_card_elements/TestCard_Card";

class Carousel_TestCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TestCard_Card
                    title = {this.props.title}
                    plays = {this.props.plays}
                    rating = {this.props.rating}
                    colors={this.props.colors}
                />

                <View style={{borderRadius: 5, overflow:'hidden'}}>
                <TouchableNativeFeedback>
                    <View style={[styles.btn, {right: 65}]}/>
                </TouchableNativeFeedback>
                </View>
                <TouchableNativeFeedback>
                    <View style={[styles.btn, {right: 0}]}>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        position:'relative'
    },
    btn: {
        width: 60,
        height: 60,
        borderRadius: borderRadius,
        backgroundColor: lightColor,
        // marginLeft: 5,
        right:60,
        position: 'absolute'
    },

})

export default Carousel_TestCard;
