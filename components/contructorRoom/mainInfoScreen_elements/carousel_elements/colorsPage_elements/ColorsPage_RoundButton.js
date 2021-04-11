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
    borderRadius, secondColor, firstColor, contrastColor, secondaryColor
} from '../../../../StyleConstants';
import {TouchableWithoutFeedback} from "react-native";
import {
    carouselSetFirstColorBtn,
    carouselSetSecondColorBtn
} from "../../../../../actions/constructorActions/carouselPageAction";

class ColorsPage_RoundButton extends Component {
    constructor(props) {
        super(props)
        this.state = {size: new Animated.Value(1)}
    }

    render() {
        const borderColor = this.props.clicked_id === this.props.id ? contrastColor : secondaryColor
        const value = this.props.clicked_id === this.props.id ? 1.2 : 1

        const color =  this.props.color ? this.props.color : secondaryColor

        Animated.spring(this.state.size, {toValue: value, useNativeDriver: true}).start()

        const style = {borderWidth: 2, borderColor: borderColor, backgroundColor: color}

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.onClick()}>
                    <Animated.View style={[style, styles.btn, {transform: [{scale: this.state.size}]}]}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    btn: {
        marginLeft:10,
        width: 60,
        height: 60,
        borderRadius: 30,
        paddingTop: 10,
    },
})

export default ColorsPage_RoundButton
