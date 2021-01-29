import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, SafeAreaView, ScrollView, Dimensions,RefreshControl } from "react-native";
import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';
import MainRoom_Card from './elements/MainRoom_Card';

import MainRoom_MiniCard from './elements/MainRoom_MiniCard';
import { Link } from 'react-router-native';
import MainRoom_Carousel from './elements/MainRoom_Carousel'
import MainRoom_MiniTest from './elements/MainRoom_MiniTest';
import { loadRecommends } from '../../actions/recommendsAction';
import { firstColor, secondColor } from '../StyleConstants';
import { withNavigation } from 'react-navigation';
import { showNavBar } from '../../actions/navBarAction';

class MainRoom extends Component {
    constructor(props) {
        super(props)
        this.navigation = props.navigation
    }

    componentDidMount() {
        this.props.onLoadRecommends()
        this.props.onShowNavBar(true)
    }

    getColors(colors) {
        if (colors.length < 2)
            return { first: firstColor, second: secondColor }
        return { first: colors[0], second: colors[1] }
    }
    
    onRefresh = () =>{
        this.props.onLoadRecommends()
    }

    render() {
        let items = []

        console.log(this.props.recommends.length)
        this.props.recommends.map((recommend, key) => {
            if (recommend.type === 'card' && recommend.tests.length === 1) {

                const test = recommend.tests[0]
                items.push(<MainRoom_Card
                    key={key}
                    navigation={this.props.navigation}
                    title={test.title}
                    backgroundColor={this.getColors(test.colors)}
                    subTitle={test.sub_title}
                    likes={test.likes}
                    plays={test.plays}
                    test_t_id={test.test_t_id}
                    author={test.author.name}
                />)
            }
            else if (recommend.type === 'carousel' && recommend.tests.length > 1) {
                items.push(
                    <MainRoom_Carousel key={key}>
                        {recommend.tests.map((t, k) => {
                            
                            return <MainRoom_MiniCard
                                key={k}
                                navigation={this.props.navigation}
                                title={t.title}
                                backgroundColor={this.getColors(t.colors)}
                                subTitle={t.sub_title}
                                likes={t.likes}
                                plays={t.plays}
                                author={t.author.name}
                            />
                        })}
                    </MainRoom_Carousel>
                )
            }
        })

        return (
            <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }} >
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                <RefreshControl refreshing={this.props.loading} onRefresh={this.onRefresh} />}>
                    <View style={{ width: '100%' }}>

                        {items.map(r => r)}

                        {/* <MainRoom_MiniTest question="What time is it? asd ads asda asdads asdasd " /> */}
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default connect(
    state => ({
        recommends: state.recommends,
        loading: state.recommendsLoading
    }),
    dispatch => ({
        onShowNavBar: (state)=> dispatch(showNavBar(state)),
        onLoadRecommends: () => dispatch(loadRecommends())
    }))(MainRoom);
