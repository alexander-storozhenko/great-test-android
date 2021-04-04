import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableHighlight, TouchableWithoutFeedback, } from "react-native";

import {headerHeight, primaryColor, secondaryColor} from "../StyleConstants";
import Header_Settings from "./elements/Header_Settings";
import Header_BackButton from "./elements/Header_BackButton";
import {backScreens} from "../HeaderSettingsConstants";
import Header_Debug from "./elements/Header_Debug";
import {env} from "../../settings/url";


class Header extends Component {
    constructor(props) {
        super(props)
    }

    rightAccessories = (screen) => {
        switch (screen) {
            case 'Профиль':
                return <Header_Settings/>
        }
        return null
    }

    render() {
        let content = this.rightAccessories('Профиль')
        let back = backScreens.includes() ? <View style={styles.back_btn}><Header_BackButton/></View> : null

        return (
            <View style={styles.header}>
                {back}

                <View style={styles.settings_btn}>
                    {env ==='dev' ? <Header_Debug/> : null}
                    {/*{//TODO set custom header }*/}
                    {/*{<Header_Settings/>}*/}
                </View>
            </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        height: headerHeight,
        width: width,
        backgroundColor: secondaryColor,
        position: "relative"
    },

    back_btn: {
        position: "absolute",
        bottom: 25,
        left: 15,
    },
    settings_btn: {
        position: "absolute",
        bottom: 20,
        right: 18,
    },
    menuIconContainer: {
        position: "absolute",
        bottom: 5,
        left: 5,
        width: 60,
        height: 60,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuButton: {
        width: 30,
        height: 30,
    },
    menuIcon: {

        color: "#afa",
        // marginTop:20,
        // marginLeft: 20,
    }
});

export default connect(state => ({

}),null)(Header);
