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
import MainInfoPage_Card from "./mainInfoPage_elements/MainInfoPage_Card";
import MainInfoPage_TextColorPicker from "./mainInfoPage_elements/MainInfoPage_TextColorPicker";
import MainInfoPage_Carousel from "./mainInfoPage_elements/MainInfoPage_Carousel";
import Carousel_ColorsPage from "./mainInfoPage_elements/carousel_elements/Carousel_ColorsPage";
import SeparateLine from "../ui/SeparateLine";
import BottomButton from "../ui/BottomButton";


class Constructor_MainInfoPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <MainInfoPage_Card colors={["#6ef6ba", "#321321"]}/>
                {/*<View style={{marginTop: 20}}>*/}
                {/*    <MainInfoPage_TextColorPicker/>*/}
                {/*</View>*/}

                <View style={{marginTop: 20}}><SeparateLine/></View>
                <View style={styles.carousel_container}>
                    <MainInfoPage_Carousel>
                        <Carousel_ColorsPage/>
                    </MainInfoPage_Carousel>
                </View>
                <View style={styles.next_btn_container}>
                    <View style={styles.next_btn}>
                        <BottomButton>Далее</BottomButton>
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
    carousel_container: {
        paddingTop:10
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
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(Constructor_MainInfoPage);
