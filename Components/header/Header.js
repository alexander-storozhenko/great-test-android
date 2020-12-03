import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions} from "react-native-web";
import {primaryColor, secondaryColor} from "../StyleConstants";
import {Image} from "react-native-svg";

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image source={require('../../assets/svg/menu.svg') } />
            </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: width,
        backgroundColor: secondaryColor
    },
    menuIcon:{
        color: "#afa",
        width:30,
        height: 30
    }
});

export default Header;
