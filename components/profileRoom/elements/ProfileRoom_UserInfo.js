import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {contrastColor, h3, secondColor} from "../../StyleConstants";

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
