import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, Dimensions, StyleSheet } from "react-native";
import { lightColor } from '../../StyleConstants';
import Ripple from 'react-native-material-ripple';

class MainRoom_Card extends Component {
    render() {
        return (
            <Ripple style={styles.card}>
                <Text style={{fontFamily:'Quicksand-Bold'}}>{this.props.children}</Text>
            </Ripple>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        minHeight: 120,
        backgroundColor: lightColor,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        marginTop:20,
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
})

export default MainRoom_Card;
