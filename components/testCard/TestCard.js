import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
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
    borderRadius
} from '../StyleConstants';
import Ripple from 'react-native-material-ripple';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableRipple } from 'react-native-paper';
import Eye from '../svg/Eye';
import Love from '../svg/Love';
import { Link } from "react-router-native";
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Profile from '../svg/Profile';
import TestOne from '../svg/TestOne';
import { color } from 'react-native-reanimated';
import TestTwo from '../svg/TestTwo';
import { showNavBar } from '../../actions/navBarAction';
import { setTestData } from '../../actions/testsAction';

class TestCard extends Component {
    constructor(props) {
        super(props)
    }
    onClick = () => {
        this.props.onSetTestTemplateData({ test_t_id: this.props.test_t_id })
        this.props.navigation.navigate('TestPreview')
        this.props.onShowNavBar(false)
    }
    render() {
        return (
            <View style={styles.card}>
                <LinearGradient style={{ borderRadius: borderRadius, position: "relative", width: '100%', height: '100%' }}
                    colors={[this.props.backgroundColor.first, this.props.backgroundColor.second]}>

                    <View style={styles.statistics}>
                        <View style={styles.statistics_container}>
                            <View style={styles.statisticsContent}>
                                <Eye fill={lightColor} width="15" height="15" />
                                <Text style={{ marginLeft: 3, color: lightColor }} >{this.props.plays}</Text>

                                <Love fill={lightColor} style={{ marginLeft: 8 }} width="13" height="13" />
                                <Text style={{ marginLeft: 3, color: lightColor }} >{this.props.likes}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Profile width={14} height={14} fill={primaryColor} />
                                <Text style={{ color: "white", marginLeft: 10, fontFamily: fontMedium }}>{this.props.author}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ overflow: 'hidden', borderRadius: borderRadius }}>
                        <TouchableNativeFeedback onPress={() => this.onClick()}>
                            <View style={{ padding: 10 }}>

                                <View style={{ width: '100%', height: "100%" }}>
                                    <View style={styles.titleContainer}>
                                        <Text style={{ fontSize: h2, fontFamily: fontBold, color: titleColorLight}}>
                                            {this.props.title}
                                        </Text>
                                    </View>

                                    <View style={styles.subTitleContainer}>
                                        <Text style={{ fontSize: h4, fontFamily: fontMedium, color: subTitleColorLight }}>
                                            {this.props.subTitle}
                                        </Text>
                                    </View>

                                    {/* {this.props.questionsCount} */}
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </LinearGradient>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 190,
        marginTop: 15,
        borderRadius: borderRadius,
        // backgroundColor: "#0000",
        elevation: 15,
    },
    titleContainer: {
        height: 40,
        width: '100%',
    },
    subTitleContainer: {
        height: 40,
        width: '100%',
    },
    statistics: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        left: 0,
        bottom: 8,
    },
    statistics_container: {
        position: "relative",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    statisticsContent: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: "center"
    }
})

export default connect(
    null,
    dispatch => ({
        onSetTestTemplateData: (data) => dispatch({ type: 'TEST/SET_TEST_T_DATA', payload: data }),
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(TestCard);
