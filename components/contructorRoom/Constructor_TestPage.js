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
    Keyboard,
    TouchableWithoutFeedback
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
    borderRadius, tabHeight
} from '../StyleConstants';
import Ripple from 'react-native-material-ripple';
import {LinearGradient} from 'expo-linear-gradient';
import {TouchableRipple} from 'react-native-paper';
import Eye from '../svg/Eye';
import Love from '../svg/Love';
import {Link} from "react-router-native";
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Profile from '../svg/Profile';
import TestOne from '../svg/TestOne';
import {color} from 'react-native-reanimated';
import TestTwo from '../svg/TestTwo';
import {showNavBar} from '../../actions/navBarAction';
// import { setTestData } from '../../actions/testsAction';
import MainInfoPage_Card from "./mainInfoScreen_elements/MainInfoScreen_Card";
import MainInfoPage_TextColorPicker from "./mainInfoScreen_elements/MainInfoScreen_TextColorPicker";
import MainInfoPage_Carousel from "./mainInfoScreen_elements/MainInfoScreen_Carousel";
import Carousel_ColorsPage from "./mainInfoScreen_elements/carousel_elements/Carousel_ColorsPage";
import SeparateLine from "../ui/SeparateLine";
import BottomButton from "../ui/BottomButton";
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
)(Constructor_ParamsScreen);
