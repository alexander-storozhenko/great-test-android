import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, SafeAreaView, ScrollView, Dimensions, RefreshControl} from "react-native";
import Header from "../header/Header";
import MainRoom_Card from '../testCard/TestCard';

import MainRoom_MiniCard from './elements/MainRoom_MiniCard';
import {Link} from 'react-router-native';
import MainRoom_Carousel from './elements/MainRoom_Carousel'
import MainRoom_MiniTest from './elements/MainRoom_MiniTest';
import {loadRecommends} from '../../actions/recommendsAction';
import {firstColor, secondColor} from '../StyleConstants';
import {withNavigation} from 'react-navigation';
import {showNavBar} from '../../actions/navBarAction';
import {resetQuestionNumber} from "../../actions/questionsAction";
import TestCard from "../testCard/TestCard";
import RecommendCard from "../recommendCard/RecommendCard";
import {setNavigation} from "../../actions/navigationAction";
import Slider from '../ui/Slider'
class MainRoom extends Component {
    constructor(props) {
        super(props)
        this.navigation = props.navigation
    }

    componentDidMount() {
        this.props.onLoadRecommends()
        this.props.onShowNavBar(true)
        this.props.setNavigation(this.props.navigation)

        this.props.navigation.addListener('focus', (e) => {
            this.props.setHeader("Recommends")
        })
    }

    onRefresh = () => {
        this.props.onLoadRecommends()
    }

    items = () => {
        let items = []

        this.props.recommends.map((recommend, key) => {
            if (recommend.type === 'card' && recommend.tests.length === 1) {
                const test = recommend.tests[0]
                items.push(<RecommendCard
                    key={key}
                    navigation={this.props.navigation}
                    title={test.title}
                    backgroundColors={test.colors}
                    image_url={test.image_url}
                    subTitle={test.sub_title}
                    rating={test.rating}
                    plays={test.plays}
                    test_t_id={test.id}
                    author={test.author.name}
                />)
            } else if (recommend.type === 'carousel' && recommend.tests.length > 1) {
                items.push(
                    <MainRoom_Carousel key={key}>
                        {recommend.tests.map((t, k) => {

                            return <MainRoom_MiniCard
                                key={k}
                                navigation={this.props.navigation}
                                title={t.title}
                                backgroundColor={this.getColors(t.colors)}
                                subTitle={t.sub_title}
                                rating={t.rating}
                                plays={t.plays}
                                author={t.author.name}
                            />
                        })}
                    </MainRoom_Carousel>
                )
            }
        })
        return items
    }

    render() {
        return (
            <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
                <ScrollView style={{width: '100%',height: '100%'}} showsVerticalScrollIndicator={false} refreshControl={
                    <RefreshControl refreshing={this.props.loading} onRefresh={this.onRefresh}/>}>
                    <View style={{width: '100%',height: '100%'}}>

                        {this.items().map(r => r)}

                        {/* <MainRoom_MiniTest question="What time is it? " /> */}
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
        onShowNavBar: (state) => dispatch(showNavBar(state)),
        onLoadRecommends: () => dispatch(loadRecommends()),
        setNavigation: (current) => dispatch(setNavigation(current)),
        setHeader: (text) => dispatch({type: 'HEADER/SET', payload: { text: text}}),
    }))(MainRoom);
