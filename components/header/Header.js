import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import {headerHeight, primaryColor, secondaryColor} from "../StyleConstants";
import Header_Settings from "./elements/Header_Settings";


class Header extends Component {
    constructor(props){
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

        return (
            <View style={styles.header}>
                {content}
            </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        height:headerHeight,
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
