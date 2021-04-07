import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button, View, Image, Text, StyleSheet, Dimensions, ActivityIndicator,
    TouchableNativeFeedback, ScrollView
} from "react-native";
import {lightColor, secondaryColor} from "../../../StyleConstants";
import Carousel_TestCard from "./Carousel_TestCard";
import RoundedButton from "../../../roundedButton/RoundedButton";
import {setNavigation} from "../../../../actions/navigationAction";
import {getUserTests} from "../../../../actions/profileActions/profileCarouselAction";
import {navigate} from "../../../../lib/NavigationService";

class Carousel_MyTestsPage extends Component {

    componentDidMount() {
        this.props.getUserTests(0)
    }

    navigate = () => {
        navigate('ConstructorMainInfo')
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.loading ?
                    <ActivityIndicator size="small" color={secondaryColor}/> :
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                        {  this.props.userTests
                            ? this.props.userTests.map((test,key) =>
                                <Carousel_TestCard
                                    key={key}
                                    title={test.title}
                                    plays={test.plays}
                                    rating={test.rating}
                                    colors={test.colors}
                                />)
                            : <View/>
                        }
                    </ScrollView>}

                <View style={styles.rounded_btn}>
                    <RoundedButton action={this.navigate}/>
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
        loading: state.profileCarouselLoading,
        userTests: state.profileCarouselData,
    }),
    dispatch => ({
        getUserTests: (page = 0) => dispatch(getUserTests(page)),
    }))(Carousel_MyTestsPage);
