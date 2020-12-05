import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View} from "react-native";
import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';
import MainRoom_Card from './elements/MainRoom_Card';

class MainRoom extends Component {
    render() {
        return (
            <View style={{width:'100%'}}>
                <MainRoom_Card/>
                <MainRoom_Card/>                
            </View>
        );
    }
}

export default MainRoom;
