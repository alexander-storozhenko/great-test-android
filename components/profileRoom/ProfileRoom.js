import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import ProfileRoom_Logo from "./elements/ProfileRoom_Logo";
import ProfileRoom_UserInfo from "./elements/ProfileRoom_UserInfo";
import ProfileRoom_UserStatistics from "./elements/ProfileRoom_UserStatistics";
import ProfileRoom_ButtonsLine from "./elements/ProfileRoom_ButtonsLine";
import {lightColor} from "../StyleConstants";
import ProfileRoom_Panel from "./elements/ProfileRoom_Panel";
import ProfileRoom_Carousel from "./elements/ProfileRoom_Carousel";
import Carousel_TestCard from "./elements/carousel_elements/Carousel_TestCard";
import Carousel_MyTestsPage from "./elements/carousel_elements/Carousel_MyTestsPage";

class ProfileRoom extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.user_info}>
                    <View style={styles.info}>
                        <ProfileRoom_Logo/>
                        <View style={styles.right_info}>
                            <ProfileRoom_UserInfo name={"BOGDANBBsdsdsdOfasfGD"}/>
                            <ProfileRoom_UserStatistics/>
                            <ProfileRoom_ButtonsLine/>
                        </View>
                    </View>
                </View>
                <View style={styles.sep}/>
                <View style={styles.panel}>
                    <ProfileRoom_Panel/>
                </View>

                <ProfileRoom_Carousel>
                    <Carousel_MyTestsPage/>
                    <Carousel_MyTestsPage/>
                    {/*<Carousel_MyTestsPage/>*/}
                </ProfileRoom_Carousel>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    user_info: {
        paddingTop: 15,
        paddingLeft: 15,
        height: 160,
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
        paddingLeft: 30,
        justifyContent: 'space-between'
    },
    sep: {
        height: 1,
        backgroundColor: lightColor,
        width: '100%'
    },
    panel: {
        marginTop: 10,
        width: '100%'
        // backgroundColor: lightColor,
    }

})


export default ProfileRoom;
