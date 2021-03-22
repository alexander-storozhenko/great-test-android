import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    Keyboard, Animated
} from "react-native";
import {
    fontBold,
    fontMedium,
    h2,
    h3,
    h4,
    lightColor,
    titleColor,
    subTitleColor,
    titleColorLight,
    subTitleColorLight,
    primaryColor,
    borderRadius, secondColor, firstColor
} from '../../StyleConstants';
import {TouchableWithoutFeedback} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {getTextColor} from "../../../lib/ColorsHelper";

class MainInfoPage_Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.card}>
                <LinearGradient style={styles.gradient} colors={[this.props.first_color, this.props.second_color]}>
                    <View style={styles.card_content}>
                        <View>
                            <TextInput placeholder={'Название...'}
                                       style={[{color: getTextColor(this.props.first_color)}, styles.input, styles.input_title]}/>
                        </View>
                        <View style={styles.description}>
                            <TextInput placeholder={'Описание...'}
                                       style={[{color: getTextColor(this.props.first_color)},styles.input, styles.input_description]}/>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 190,
        maxWidth: 380,
        marginTop: 15,
        borderRadius: borderRadius,
    },
    card_content: {
        width: '100%',
        height: '100%',
        padding: 10,
    },
    input: {
        width: 200,
        height: 40,
        // borderBottomColor: lightColor,
        // borderBottomWidth: 2,

    },
    input_title:{
        fontFamily: fontBold,
        fontSize: h3
    },
    input_description:{
        fontSize: h4,
        width: 300,
    },
    gradient: {
        width: '100%',
        height: '100%',
        borderRadius: borderRadius,
    },
    description:{
        paddingTop: 10,
    }
})

export default connect(
    state => ({
        first_color: state.constructorCarouselFirstColorBtnClicked.color,
        second_color: state.constructorCarouselSecondColorBtnClicked.color,
    }),
    dispatch => ({


    })
)(MainInfoPage_Card);
