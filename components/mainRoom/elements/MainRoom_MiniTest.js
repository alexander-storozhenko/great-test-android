import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, Dimensions, StyleSheet, TouchableHighlight } from "react-native";
import { fontBold, fontMedium, h2, h3, h4, lightColor, titleColor } from '../../StyleConstants';
import Ripple from 'react-native-material-ripple';
import { LinearGradient } from 'expo-linear-gradient';
import Eye from '../../svg/Eye';
import Love from '../../svg/Love';
import { Link } from "react-router-native";
import MiniTest_Button from './MiniTest_Button';

class MainRoom_MiniTest extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.miniTest}>

                <Text style={styles.title}>{this.props.question}</Text>
                <MiniTest_Button>
                    Russia
                    </MiniTest_Button>
                <MiniTest_Button>
                    Belgia
                    </MiniTest_Button>
                <MiniTest_Button>
                    England
                    </MiniTest_Button>
                <MiniTest_Button>
                    America
                    </MiniTest_Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    miniTest: {
        padding: 20,
        height: 400,
        marginTop: 10,
        borderRadius: 1,
        borderStyle: "dashed",
        borderWidth: 2,
        backgroundColor: lightColor,

    },
    title: {
        fontSize: h2,
        width: '100%',
        paddingBottom: 20,
        textAlign: 'center',
        fontFamily: fontBold
    },
    miniTest__btn: {
        width: '100%',
        height: 40,
        marginLeft: 20,
    }
})

export default MainRoom_MiniTest;
