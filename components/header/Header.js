import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Dimensions, Text} from "react-native";
import {fontBold, h1, h2, h3, headerHeight, secondaryColor} from "../StyleConstants";
import Header_Settings from "./elements/Header_Settings";
import Header_Debug from "./elements/Header_Debug";
import {env} from "../../settings/url";
import Header_BackButton from "./elements/Header_BackButton";

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.header}>
                <View style={{position: 'absolute', bottom: 25, flexDirection: 'row'}}>
                    {this.props.content.back ?
                        <View style={styles.back_btn}>
                            <Header_BackButton/>
                        </View>  : null}
                    <Text style={styles.text}>{this.props.content.text}</Text>
                </View>

                <View style={styles.settings_btn}>
                    {env === 'dev' ? <Header_Debug/> : null}
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
        position: "relative"
    },

    text: {
        position: "relative",
        bottom: 5,
        left: 18,
        color: secondaryColor,
        fontSize: h3,
        fontFamily: fontBold
    },

    back_btn: {
        bottom: 3,
        left: 10,
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
    content: state.headerContent

}), null)(Header);
