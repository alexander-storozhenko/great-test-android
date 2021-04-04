import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import {headerHeight, primaryColor, secondaryColor} from "../../StyleConstants";
import Settings from "../../svg/Settings";
import {openDebugPanel} from "../../../actions/debugAction";
import Bug from "../../svg/Bug";


class Header_Debug extends Component {
    constructor(props) {
        super(props)
        this.state = {open: false}
    }

    onPress = () => this.props.onOpen(!this.props.panelOpen)

    render() {
        return (
            <View style={styles.settings}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <Bug height={30} width={30} fill={primaryColor}/>
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
    panelOpen: state.panelOpen
}), dispatch => ({
    onOpen: (open) => dispatch(openDebugPanel(open))
}))(Header_Debug);
