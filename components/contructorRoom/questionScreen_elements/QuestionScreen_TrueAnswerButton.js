import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableNativeFeedback,
    TextInput
} from "react-native";
import {
    borderRadius, successColor
} from '../../StyleConstants';

class QuestionScreen_TrueAnswerButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.container]}>
                <TouchableNativeFeedback onPress={this.props.onPress}>
                    <View style={styles.btn}>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: successColor,
        borderRadius: borderRadius,
    },
})

export default connect(
    state => ({
    }),
    dispatch => ({

    })
)(QuestionScreen_TrueAnswerButton);
