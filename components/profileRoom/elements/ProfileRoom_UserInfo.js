import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View,Image, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import Logo from '../../../assets/dev_logo.jpg'
import {contrastColor, fontBold, h3, h2, primaryColor, secondColor} from "../../StyleConstants";

class ProfileRoom_UserInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.name_container}>
                    <Text style={styles.nickname}>{this.props.name}</Text>
                    {/*<View style={styles.sep}/>*/}
                    {/*<Text style={styles.status}>{this.props.status}</Text>*/}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // width:'100%',
        // backgroundColor:'red',

        // paddingLeft:30,
        paddingTop:10,
    },
    name_container: {
        width: '100%',
        flexDirection:'row',
        alignItems:'center'
    },
    nickname:{
        fontSize: 18,
    },
    sep:{
      width: 2,
        height:'100%',
      backgroundColor: secondColor,
        marginLeft:8,
        marginRight:8,
    },
    status:{
        color: contrastColor,
        fontSize: h3
    }

})

export default ProfileRoom_UserInfo;
