import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback
} from "react-native";
import {
    fontBold,
    h3,
    h4,
    borderRadius
} from '../../../StyleConstants';

class Card_ImageButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const color = this.props.color ? this.props.color : 'white'

        return (
            <View>
                <TouchableNativeFeedback onPress={this.props.onPress}>
                    <View style={[styles.btn, {borderColor: color}]}/>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        borderRadius: borderRadius,
        borderWidth: 2,
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
    }),
    dispatch => ({


    })
)(Card_ImageButton);
