import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";

/**
 * grid for 2 answers
 */

//TODO answers size
const TestRoom_2Grid = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
    },
    container: {
        width: '100%',
        flexDirection: 'row'
    }

})

export default connect(
    state => ({}),
    dispatch => ({}))(TestRoom_2Grid)