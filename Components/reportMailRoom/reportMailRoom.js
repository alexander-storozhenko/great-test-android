import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from "react-native";

class NavBar extends Component {
//
    constructor(props){
        super(props)
    }

    _navigate(route){
        NavigationService.navigate(route);
    }

    render() {
        return (
            <View style={{ width: '100%', height: navHeight, justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: lightColor }}>
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
            </View>
        );
    }
}
