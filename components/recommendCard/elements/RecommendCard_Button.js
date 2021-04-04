import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Image, Text, StyleSheet, Dimensions, ActivityIndicator,TouchableNativeFeedback} from "react-native";
import {borderRadius, h3, primaryColor} from "../../StyleConstants";
import {showNavBar} from "../../../actions/navBarAction";

class RecommendCard_Button extends Component {
    onClick = () => {
        this.props.onSetTestTemplateData({ test_t_id: this.props.test_t_id })
        this.props.navigation.navigate('TestPreview')
    }

    render() {
        return (
            <View style={[{borderColor: this.props.color},styles.btn]}>
                <TouchableNativeFeedback onPress={()=> this.onClick()}>
                    <View style={styles.btn_text_container}>
                        <Text style={[{color: this.props.color}, styles.btn_text]}>Play!</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 100,
        height: 50,
        borderWidth: 2,
        borderRadius: borderRadius,
    },
    btn_text_container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    btn_text: {
        fontSize: h3,
    }
})

export default connect(
    null,
    dispatch => ({
        onSetTestTemplateData: (data) => dispatch({ type: 'TEST/SET_TEST_T_DATA', payload: data }),
    })
)(RecommendCard_Button)
