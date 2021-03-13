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
import {lightColor} from "../../../StyleConstants";
import { LinearGradient } from 'expo-linear-gradient';
import TestCard_Card from "./test_card_elements/TestCard_Card";

class Carousel_TestCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TestCard_Card
                    title = 'тест тест тест а б с д'
                    plays = '3.7k'
                    rating = '4.7'
                    colors={['#731448', '#8d1e6f']}
                />
                <TouchableNativeFeedback>
                    <View style={[styles.btn, {right: 65}]}>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={[styles.btn, {right: 0}]}>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: 'blue',
        width:'90%',
        // flex: 1,
        height: 60,
        marginBottom: 10,
        borderRadius: 5,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        position:'relative'
    },
    btn: {
        width: 60,
        height: 60,
        borderRadius: 5,
        backgroundColor: lightColor,
        // marginLeft: 5,
        right:60,
        position: 'absolute'
    },

})

export default Carousel_TestCard;
