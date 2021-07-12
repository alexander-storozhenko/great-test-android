import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Dimensions} from "react-native";
import {answerBtnWidth} from "../../../StyleConstants";

/**
 * grid for >2 answers
 */

const COLUMNS = 2
const TestRoom_BigCountGrid = ({children}) => {
    const answers = children.map(answer => <View style={{margin: 5}}>{answer}</View>)

    return (
        <View style={[styles.container]}>
            <View style={[styles.answers, {width: COLUMNS * (answerBtnWidth + 10)}]}>
                {answers}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    answers: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    container: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    }

})

export default connect(
    state => ({}),
    dispatch => ({}))(TestRoom_BigCountGrid)