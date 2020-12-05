import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, StyleSheet, Dimensions } from "react-native";

class Room extends Component {
    render() {
        return (
            <View style={styles.room}>
                {this.props.children}
            </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    room: {
        padding: 20,
        paddingTop:0,
        width: width,
        justifyContent: 'center',
        flexDirection: 'row',
    },
})

export default Room;
