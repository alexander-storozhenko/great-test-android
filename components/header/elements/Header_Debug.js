import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {primaryColor} from "../../StyleConstants";
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
            <View>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <Bug height={30} width={30} fill={primaryColor}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default connect(state => ({
    panelOpen: state.panelOpen
}), dispatch => ({
    onOpen: (open) => dispatch(openDebugPanel(open))
}))(Header_Debug);
