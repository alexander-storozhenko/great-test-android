import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";

/**
 * grid for >3 answers
 */

const COLUMNS = 3

const TestRoom_BigCountGrid = ({children}) => {
    const result = []

    children.forEach((_, index) => index === 0 || index % COLUMNS === 0 ?
        result.push(<View style={styles.row}> {children.slice(index, index + COLUMNS)} </View>) : null)

    return (
        <View style={styles.container}>
            {result}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
    },
    container: {
        width: '100%',
        flexDirection: 'column'
    }

})

export default connect(
    state => ({}),
    dispatch => ({}))(TestRoom_BigCountGrid)