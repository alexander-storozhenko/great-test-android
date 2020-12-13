import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from "react-native";
import { Link } from 'react-router-native';
import { lightColor, navHeight, secondaryColor } from '../StyleConstants';
import TestTwo from '../svg/TestTwo';
import RecommendsNav from '../svg/RecommendsNav';
import SearchNav from '../svg/SearchNav';
import ProfileNav from '../svg/ProfileNav'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';
import * as NavigationService from '../../lib/NavigationService'

//test
class NavBar extends Component {

    constructor(props){
        super(props)
    }
    _navigate(route){
        NavigationService.navigate(route, { userName: 'Lucy' });
    }

    render() {
        return (
            <View style={{ width: '100%', height: navHeight, justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: lightColor }}>

{/* NavigationActions.navigate({routeName:'Main'}) */}
                <View style={{ width: "33.33333%" }}>
                    <TouchableNativeFeedback onPress={()=> this._navigate('Main')} style={styles.nav_item}>
                        <View style={styles.nav_item}>
                            <RecommendsNav width={22} height={22} fill={secondaryColor} />
                            <Text style={styles.nav_item_text}>Tests</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={{ width: "33.33333%" }}>
                    <TouchableNativeFeedback onPress={()=> this._navigate('Main')} style={styles.nav_item}>
                        <View style={styles.nav_item}>
                            <SearchNav width={22} height={22} fill={secondaryColor} />
                            <Text style={styles.nav_item_text}>Search</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ width: "33.33333%" }}>

                    <TouchableNativeFeedback onPress={()=> this._navigate('Main')} style={styles.nav_item}>
                        <View style={styles.nav_item}>
                            <ProfileNav width={22} height={22} fill={secondaryColor} />
                            <Text style={styles.nav_item_text}>Profile</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                {/* <Link to="/test"><Text>KEKK</Text></Link> */}
                {/* <MainRoom_Card title="New 2021 year!" backgroundColor={{ first: "#1f6eed", second: "#1fed75" }} */}
                {/* subTitle="Who you from new year fairy tail?" /> */}

                {/* <MainRoom_Card /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav_item: {
        height: '100%',
        // width: '100%',
        backgroundColor: lightColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nav_item_text: {
        fontSize: 11,

     }
})

export default NavBar;
