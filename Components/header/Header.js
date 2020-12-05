import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableHighlight} from "react-native";
import {primaryColor, secondaryColor} from "../StyleConstants";
import {Image} from "react-native-svg";
import { TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import {moveSidebar} from '../../actions/sidebarAction';
import HeaderMenu from '../svg/HeaderMenu';
import HeaderClose from '../svg/HeaderClose';
import {Animated} from 'react-native';
import Ripple from 'react-native-material-ripple';

class Header extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const menuButton = this.props.move 
        ? <HeaderClose style={styles.menuIcon} fill={primaryColor} width="23" height="23"/> 
        : <HeaderMenu style={styles.menuIcon} fill={primaryColor} width="30" height="30"/> 

        return (
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={()=>this.props.onMoveSidebar() }>
                    <View style={styles.menuIconContainer}>
                   {menuButton}
                   </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        height:90,
        width: width,
        backgroundColor: secondaryColor,
        position:"relative"
    },
    menuIconContainer:{
        position:"absolute",
        bottom:5,
        left:5,
        width:60,
        height:60,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    menuButton:{
        width: 30,
        height:30,
    },
    menuIcon:{
        
        color: "#afa",
        // marginTop:20,
        // marginLeft: 20,
    }
});

export default connect(
    state => ({
        move: state.move,
    }),
    dispatch =>({
        onMoveSidebar: () => dispatch({type: 'SIDEBAR/MOVE'})
    })
)(Header);
