import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Image, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import Logo from '../../../assets/dev_logo.jpg'
import {contrastColor, fontBold, h3, h2, primaryColor, secondColor} from "../../StyleConstants";

class ProfileRoom_UserStatistics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.account_status_text}>free account</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // width:'100%',
        // backgroundColor:'red',
        paddingTop:10,

    },
    name_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    account_status: {
        padding: 3,
        backgroundColor: contrastColor,
    },
    account_status_text: {
        color: primaryColor,
        backgroundColor: contrastColor,
        padding: 5,
        textAlign: 'center',
        width: 100,
        borderRadius: 5,
    },
    sep: {
        width: 2,
        height: '100%',
        backgroundColor: secondColor,
        marginLeft: 8,
        marginRight: 8,
    },
    status: {
        color: contrastColor,
        fontSize: h3
    }

})

export default ProfileRoom_UserStatistics;
