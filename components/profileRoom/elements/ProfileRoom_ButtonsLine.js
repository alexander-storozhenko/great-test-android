import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View,Image, Text, StyleSheet, Dimensions,TouchableNativeFeedback, ActivityIndicator} from "react-native";
import Logo from '../../../assets/dev_logo.jpg'
import {contrastColor, fontBold, h3, h2, primaryColor, secondColor, h4} from "../../StyleConstants";

class ProfileRoom_ButtonsLine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback>
                    <View style={styles.change_info_btn}>
                        <Text style={styles.change_info_btn_text}>Изменить профиль</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingTop:15,
    },
    change_info_btn: {
        width: 200,
        padding: 5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderColor: secondColor,
        borderWidth:2,

    },
    change_info_btn_text:{
        fontSize: h4
    }

})

export default ProfileRoom_ButtonsLine;
