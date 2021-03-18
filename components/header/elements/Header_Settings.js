import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import {headerHeight, primaryColor, secondaryColor} from "../../StyleConstants";
import Settings from "../../svg/Settings";


class Header_Settings extends Component {
    constructor(props) {
        super(props)
    }

    navigateToSettings = () => {

    }

    render() {
        return (
            <View style={styles.settings}>
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.navigate('Settings')
                }}>

                    <Settings fill={primaryColor}/>

                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    settings: {
        // position: 'absolute',
        // bottom: 25,
        // right: 25,
    }
});

export default connect(state => ({
    navigation: state.currentNavigation
}), null)(Header_Settings);
