import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View,Image, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import Logo from '../../../assets/dev_logo.jpg'
import {fontBold, h1_5, secondColor} from "../../StyleConstants";

class ProfileRoom_Logo extends Component {
    render() {
        return (
            <View>
                <Image style={styles.logo} source={Logo}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width:90,
        height: 90,
        borderRadius: 45,
        borderWidth:3,
        borderColor:secondColor,

    },
    content: {
        width: '100%',

        position: 'relative',

    },
    title: {
        marginTop: 20,
        // marginBottom:20,
        fontSize: h1_5,
        fontFamily: fontBold,
        textAlign: 'center',
    }

})

export default ProfileRoom_Logo;
