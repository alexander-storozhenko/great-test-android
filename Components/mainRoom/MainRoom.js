import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, SafeAreaView, ScrollView,Dimensions } from "react-native";
import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';
import MainRoom_Card from './elements/MainRoom_Card';

import MainRoom_MiniCard from './elements/MainRoom_MiniCard';
import { Link } from 'react-router-native';
import MainRoom_Carousel from './elements/MainRoom_Carousel'
import MainRoom_MiniTest from './elements/MainRoom_MiniTest';

class MainRoom extends Component {
    constructor(props){
        super(props)
        this.navigation = props.navigation
    }
    render() {
        return (
            <SafeAreaView style={{height:'100%', backgroundColor:'white'}} >
                <ScrollView showsVerticalScrollIndicator ={false}>
                    <View style={{ width: '100%'}}>
                        <MainRoom_Card navigation={this.props.navigation} title="New 2021 year!" backgroundColor={{ first: "#1f6eed", second: "#1fed75" }}
                            subTitle="Who you from new year fairy tail?" />
                        <MainRoom_Carousel>
                            {/* <View style={{backgroundColor:"green", width:"200", height:"300"}}><Text>aaa</Text></View> */}
                            <MainRoom_MiniCard title="New 2021 year!" backgroundColor={{ first: "#1f6eed", second: "#1fed75" }}
                                subTitle="Who you from new year fairy tail?" />
                            <MainRoom_MiniCard title="New 2021 year!" backgroundColor={{ first: "#1f6eed", second: "#1fed75" }}
                                subTitle="Who you from new year fairy tail?" />
                            <MainRoom_MiniCard title="New 2021 year!" backgroundColor={{ first: "#1f6eed", second: "#1fed75" }}
                                subTitle="Who you from new year fairy tail?" />
                        </MainRoom_Carousel>
                        <MainRoom_MiniTest question="What time is it? asd ads asda asdads asdasd " />
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default MainRoom;
