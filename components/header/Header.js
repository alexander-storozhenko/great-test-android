import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Dimensions} from "react-native";
import {headerHeight, secondaryColor} from "../StyleConstants";
import Header_Settings from "./elements/Header_Settings";
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
        return (
            <View style={styles.header}>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuButton: {
        width: 30,
        height: 30,
    },
    menuIcon: {
        color: "#afa",
    }
});

export default connect(state => ({

}),null)(Header);
