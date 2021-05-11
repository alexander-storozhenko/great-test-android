import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ActivityIndicator, ScrollView, RefreshControl, SafeAreaView} from "react-native";
import {lightColor, secondaryColor} from "../../../StyleConstants";
import Carousel_TestCard from "./Carousel_TestCard";
import RoundedButton from "../../../roundedButton/RoundedButton";
import {navigate} from "../../../../lib/NavigationService";
import {getUserTests} from "../../../../actions/profileActions/profileCarouselAction";

class Carousel_MyTestsPage extends Component {
    navigate = () => {
        navigate('ConstructorMainInfo')
    }

    onRefresh = () => {
        this.props.getUserTests()
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.list}
                            refreshControl={
                                <RefreshControl refreshing={this.props.loading} onRefresh={this.onRefresh}/>}>
                    <View>
                        {this.props.data
                            ? this.props.data.map((test, key) => {
                                if (test.id !== this.props.deletedTestTId)
                                    return <Carousel_TestCard
                                        id={key}
                                        key={key}
                                        test_t_id={test.id}
                                        title={test.title}
                                        plays={test.plays}
                                        rating={test.rating}
                                        colors={test.colors}
                                    />
                            })
                            : <View/>
                        }
                    </View>
                </ScrollView>


                <View style={styles.rounded_btn}>
                    <RoundedButton action={this.navigate}/>
                </View>

            </SafeAreaView>
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
        deletedTestTId: state.testTDeleteSuccess,
    }),
    dispatch => ({
        getUserTests: (page = 0) => dispatch(getUserTests(page)),

    }))(Carousel_MyTestsPage);
