import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, StyleSheet, Dimensions } from "react-native";
import {navHeight, roomPadding} from '../StyleConstants';
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
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    room: {
        padding: roomPadding,
        paddingTop:0,
        paddingBottom:0,
        width: width,
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'#0000',
        overflow:'visible'
    },
})

export default Room;
