import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View} from "react-native-web";
import Header from "../header/Header";

function mapStateToProps(state) {
    return {};
}

class MainRoom extends Component {
    render() {
        return (
            <View>
                <Header/>
            </View>
        );
    }
}

export default MainRoom;
