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
import {h2, h3, lightColor} from "../StyleConstants";
import {getTextColor} from "../../lib/ColorsHelper";
import BookMark from "../svg/BookMark";
import {rootPath} from "../../lib/Requests";

const GRADIENT_OPACITY = 0.83

//TODO not independent
class RecommendCard extends Component {

    colors = this.props.backgroundColors && this.props.backgroundColors[0] && this.props.backgroundColors[1] ? this.props.backgroundColors : ['#0023DC', '#08ACB7']

    render() {
        const color = getTextColor(this.colors[0])
        return (
            <View style={styles.container}>
                {this.props.image_url ? <ImageBackground style={styles.image} source={{uri: rootPath(this.props.image_url ) }}/> : null }
                <LinearGradient start={[0, 0]} end={[0.2, 1]} style={styles.gradient} colors={this.colors}/>
                <TouchableNativeFeedback>
                    <View style={styles.touchable_container}>
                        <View style={styles.text_container}>
                            <Text style={[{color: color}, styles.title]}>{this.props.title}</Text>
                            <Text style={[{color: color}, styles.subtitle]}>{this.props.subTitle}</Text>
                        </View>
                        <BookMark fill={color} style={styles.bookmark}/>
                        <RecommendCard_Button test_t_id={this.props.test_t_id} color={color} navigation={this.props.navigation}/>
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
        marginTop:-1 // "fix" rendering bug
    },
    gradient: {
        width: '100%',
        height: '100%',
        opacity: GRADIENT_OPACITY,
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
        marginTop: 5,
        fontSize: h3,
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
