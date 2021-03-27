import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text,StyleSheet } from "react-native";
import Eye from '../../svg/Eye';
import {fontBold, h3, h4, lightColor, ml_10, ml_20, mt_10,mt_30,mt_20, secondaryColor} from '../../StyleConstants'
import TestTwo from '../../svg/TestTwo';
import TestOne from '../../svg/TestOne';
import Chronometer from '../../svg/Chronometer';
import Clock from '../../svg/Clock';
import Return from '../../svg/Return';
import Profile from '../../svg/Profile';

class TestPreviewRoom_Card extends Component {
    render() {
        return (
            <View style={{paddingRight:5, paddingLeft:5}}>
            <View style={styles.card}>
                <View style={styles.card_item}>
                    <TestTwo width={30} height={30} fill={secondaryColor}/>
                    <Text style={styles.card_item_text}>21 questions</Text>
                </View>
                <View style={styles.card_item}>
                    <TestOne width={30} height={30} fill={secondaryColor}/>
                    <Text style={styles.card_item_text}>n to n, some, one</Text>
                </View>
                <View style={styles.card_item}>
                    <Clock width={30} height={30} fill={secondaryColor}/>
                    <Text style={styles.card_item_text}>15 min</Text>
                </View>
                <View style={styles.card_item}>
                    <Chronometer width={30} height={30} fill={secondaryColor}/>
                    <Text style={styles.card_item_text}>limited time</Text>
                </View>
                <View style={styles.card_item}>
                    <Return width={30} height={30} fill={secondaryColor}/>
                    <Text style={styles.card_item_text}>can return</Text>
                </View>
                <View style={styles.card_item}>
                    <Profile width={30} height={30} fill={secondaryColor}/>
                    <Text style={styles.card_item_text}>test_user</Text>
                </View>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    card: {

        borderRadius: 15,
        paddingTop:10,
        padding: 30,
        width: '100%',
        ...mt_30,
        backgroundColor: lightColor,
    },
    card_item: {
        ...mt_20,
        flexDirection: 'row'
    },
    card_item_text:{
        fontFamily:fontBold,
        fontSize: h3,
        ...ml_20
    }
})
export default TestPreviewRoom_Card;
