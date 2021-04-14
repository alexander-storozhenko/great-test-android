import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import {h3} from '../StyleConstants';
import Params_QuestionTypeBox from "./paramsScreen_elements/Params_QuestionTypeBox";
import BottomButton from "../ui/BottomButton";
import {navigate} from "../../lib/NavigationService";

class Constructor_QuestionScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Тип вопроса 🛠</Text>
                <Params_QuestionTypeBox/>
                <Text style={styles.title}>Время на ответ ⏱</Text>
                <View style={styles.next_btn_container}>
                    <View style={styles.next_btn}>
                        <BottomButton onPress={()=> navigate('ConstructorParams')}>Далее</BottomButton>
                    </View>
                </View>
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

    },
    next_btn_container: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    next_btn: {
        position: 'relative',
        width: '100%',
        flexDirection:'row',
        justifyContent: 'center'
    }
})

export default connect(
    null,
    dispatch => ({
        onSetTestTemplateData: (data) => dispatch({type: 'TEST/SET_TEST_T_DATA', payload: data}),
    })
)(Constructor_QuestionScreen);
