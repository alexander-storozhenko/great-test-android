import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import {h3} from '../StyleConstants';
import {showNavBar} from '../../actions/navBarAction';
import Params_QuestionTypeBox from "./paramsScreen_elements/Params_QuestionTypeBox";

class Constructor_TestPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Тип вопроса 🛠</Text>
                <Params_QuestionTypeBox/>
                <Text style={styles.title}>Время на ответ ⏱</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    title:{
        fontSize: h3,
        paddingTop: 10,
        paddingBottom: 10,

    }
})

export default connect(
    null,
    dispatch => ({
        onSetTestTemplateData: (data) => dispatch({type: 'TEST/SET_TEST_T_DATA', payload: data}),
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(Constructor_TestPage);
