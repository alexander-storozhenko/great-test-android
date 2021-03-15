import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Image, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableWithoutFeedback} from "react-native";
import Logo from '../../../assets/dev_logo.jpg'
import {
    contrastColor,
    fontBold,
    h3,
    h2,
    h4,
    primaryColor,
    secondColor,
    lightColor,
    borderRadius
} from "../../StyleConstants";
import Switch from "../../switch/Switch";
import Close from "../../svg/Close";

class ProfileRoom_SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box_container}>
                    <View style={styles.box_row}>
                        <Text style={styles.box_row_text}>Звуки/эффекты</Text>
                        <Switch actionOn={() => console.log('on!')} actionOff={() => console.log('off!')}/>
                    </View>

                    {/*TODO to independent component*/}
                    <View style={styles.close_btn_container}>
                        <TouchableWithoutFeedback style={styles.close_btn} onPress={() => console.log('close!')}>
                            <View style={styles.close_btn}>
                                <Close width={20} height={20} fill={secondColor}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#fffa", // primaryColor with opacity
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'

    },
    close_btn_container:{
        position: 'absolute',
        top: 10,
        right: 10,
        width:20,
        height:20,
    },
    close_btn:{
        width:20,
        height:20,
    },
    box_container: {
        padding: 20,
        width: 300,
        minHeight: 200,
        backgroundColor: lightColor,
        borderRadius: borderRadius,
        borderWidth: 2,
        borderColor: secondColor,
        flexDirection: 'row',
        alignItems: 'center'
    },
    box_row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    box_row_text:{
      fontSize: h3,
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

export default ProfileRoom_SettingsScreen;
