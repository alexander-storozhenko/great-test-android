import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import ProfileRoom_Logo from "./elements/ProfileRoom_Logo";
import ProfileRoom_UserInfo from "./elements/ProfileRoom_UserInfo";
import ProfileRoom_UserStatistics from "./elements/ProfileRoom_UserStatistics";
import ProfielRoom_ButtonsLine from "./elements/ProfielRoom_ButtonsLine";
import {lightColor} from "../StyleConstants";
import ProfileRoom_Panel from "./elements/ProfileRoom_Panel";

class ProfileRoom extends Component {
    render() {
        return (
            <View style={{alignItems: 'center',width:'100%'}}>
                <View style={styles.user_info}>
                    <View style={styles.info}>
                        <ProfileRoom_Logo/>
                        <View style={styles.right_info}>
                            <ProfileRoom_UserInfo name={"BOGDANBBsdsdsdOfasfGD"} />
                            <ProfileRoom_UserStatistics/>
                            <ProfielRoom_ButtonsLine/>
                        </View>
                    </View>
                </View>
                <View style={styles.sep}/>
                <View style={styles.panel}>
                    <ProfileRoom_Panel/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    user_info: {
        paddingTop: 15,
        paddingLeft: 15,
        height: 170,
        width: '100%',
    },
    info: {
        width: '100%',
        // width: '100%',
        height: 80,
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    right_info: {
        // width: '100%',
        paddingLeft:30,
        justifyContent:'space-between'
    },
    sep: {
        height: 1,
        backgroundColor: lightColor,
        width:'100%'
    },
    panel: {
        marginTop:10,
        width:'100%'
        // backgroundColor: lightColor,
    }

})


export default ProfileRoom;
