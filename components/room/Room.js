import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View,Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import {headerHeight, navHeight, roomPadding, tabHeight} from '../StyleConstants';
import Header from "../header/Header";
import DebugPanel from "../debugPanel/DebugPanel";
import {env} from "../../settings/url";

class Room extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const screenHeight = Dimensions.get('window').height;
        const height = this.props.full ? screenHeight - roomPadding * 2 : screenHeight - tabHeight - roomPadding * 2

        return (
            <View>
                {/*<TouchableWithoutFeedback style={[styles.room, {height:height}]} onPress={()=>Keyboard.dismiss()}>*/}
                <View style={[styles.room, {padding: this.props.padding ? roomPadding : 0, height: height}]}>
                    {this.props.children}
                    <DebugPanel/>
                </View>

                {/*</TouchableWithoutFeedback>*/}
            </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    room: {
        position: 'relative',
        paddingTop: 0,
        paddingBottom: 0,
        width: width,
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'visible'
    },
})

export default Room;
