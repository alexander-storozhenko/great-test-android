import React, {Component} from 'react';
import {View, Image, StyleSheet} from "react-native";
import {fontBold, h1_5, secondColor} from "../../StyleConstants";
import {rootPath} from "../../../lib/Requests";

class ProfileRoom_Avatar extends Component {
    render() {
        console.log(rootPath(this.props.url))
        return (
            <View>
                {this.props.url ? <Image style={styles.logo} source={{uri: rootPath(this.props.url)}}/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    logo: {
        width:90,
        height: 90,
        borderRadius: 45,
        borderWidth:3,
        borderColor:secondColor,

    }
,
    content: {
        width: '100%',

        position: 'relative',

    }
,
    title: {
        marginTop: 20,
        fontSize: h1_5,
        fontFamily: fontBold,
        textAlign: 'center',
    }
})

export default ProfileRoom_Avatar;
