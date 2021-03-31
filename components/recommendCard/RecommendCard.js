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
    TouchableNativeFeedback,
    ImageBackground
} from "react-native";
import RecommendCard_Button from "./elements/RecommendCard_Button";
import {LinearGradient} from 'expo-linear-gradient';
import {h2, h3} from "../StyleConstants";
import {getTextColor} from "../../lib/ColorsHelper";
import {} from "react-native-web";
import BookMark from "../svg/BookMark";

class RecommendCard extends Component {

    colors = this.props.colors && this.props.colors[0] && this.props.colors[1] ? this.props.colors : ['#0023DC', '#08ACB7']

    render() {
        const color = getTextColor("#111")
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{uri: 'https://reactjs.org/logo-og.png'}}/>
                <LinearGradient start={[0, 0]} end={[0.2, 1]} style={styles.gradient} colors={this.colors}/>
                <TouchableNativeFeedback>
                    <View style={styles.touchable_container}>
                        <View style={styles.text_container}>
                            <Text style={[{color: color}, styles.title]}>Anime test</Text>
                            <Text style={[{color: color}, styles.subtitle]}>Lorem ipsum doe fkrela?</Text>
                        </View>
                        <BookMark fill={color} style={styles.bookmark}/>
                        <RecommendCard_Button color={color}/>
                    </View>
                </TouchableNativeFeedback>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 190,
        marginTop:-1
    },
    gradient: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        position: 'absolute',
    },
    image:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'contain',
    },
    touchable_container: {
        width: '100%',
        height: '100%',

    },
    text_container: {
        padding: 10
    },
    title: {
        fontSize: h2
    },
    subtitle: {
        fontSize: h3
    },
    btn: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    bookmark: {
        position: 'absolute',
        right: 10,
        top: 10,
        width: 25,
        height: 25,
    }

})

export default RecommendCard;
