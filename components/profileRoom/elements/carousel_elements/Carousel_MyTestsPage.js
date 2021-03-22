import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button, View, Image, Text, StyleSheet, Dimensions, ActivityIndicator,
    TouchableNativeFeedback, ScrollView
} from "react-native";
import {lightColor} from "../../../StyleConstants";
import Carousel_TestCard from "./Carousel_TestCard";
import RoundedButton from "../../../roundedButton/RoundedButton";
import {setNavigation} from "../../../../actions/navigationAction";

class Carousel_MyTestsPage extends Component {

    componentDidMount() {
        console.log(this.props.navigation)
    }

    navigate = () => {
        this.props.navigation.navigate('ConstructorMainInfo')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                    <Carousel_TestCard/>
                    <Carousel_TestCard/>
                    <Carousel_TestCard/>
                    <Carousel_TestCard/>
                </ScrollView>

                <View style={styles.rounded_btn}>
                    <RoundedButton action={() => {
                        this.navigate()
                    }}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        position: 'relative',
    },
    list: {
        width: '100%',
    },
    edit_btn: {
        width: 30,
        height: 30,
        backgroundColor: lightColor
    },
    delete_btn: {
        width: 30,
        height: 30,
        backgroundColor: lightColor
    },
    rounded_btn: {
        bottom: 20,
        right: 20,
        position: 'absolute'
    }

})

export default connect(
    state => ({
        navigation: state.currentNavigation,
    }),
    null)(Carousel_MyTestsPage);
