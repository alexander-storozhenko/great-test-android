import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View,Text,StyleSheet } from "react-native";
import TestPreviewRoom_Card from './elements/TestPreviewRoom_Card'
import { fontBold, h2, mt_20, mt_30, mt_10, secondaryColor } from '../StyleConstants';
import BigButton from '../bigButton/BigButton';

class TestPreviewRoom extends Component {
    render() {
        return (
            <View style={styles.preview}>
                <Text style={styles.title}>Title test kok kek</Text>
                <View style={{...mt_10, width:'100%'}}>
                    <TestPreviewRoom_Card/>
                </View>
                <View style={{width:'100%',position:'absolute',bottom:20}}>
                <BigButton onPress={()=>{
                    this.props.navigation.push('TestPreview', {key:'1'})
                }}>Start!</BigButton>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    preview:{
        position:'relative',
        height:"100%",
        backgroundColor: "white",
        // justifyContent: 'center',
        alignItems:'center',
        width:'100%',
    },
    title: {
        ...mt_30,
        fontSize: h2,
        fontFamily:fontBold,
        color: secondaryColor,
    }
})
export default TestPreviewRoom;
