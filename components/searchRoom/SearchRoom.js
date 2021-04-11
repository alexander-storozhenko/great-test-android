import React, {Component} from 'react';
import {View, ActivityIndicator} from "react-native";
import SearchRoom_InputField from "./elements/SearchRoom_InputField";
import {connect} from "react-redux";
import SearchRoom_Card from "./elements/SearchRoom_Card";
import {firstColor, secondaryColor, secondColor} from "../StyleConstants";
import TestCard from "../testCard/TestCard";
import {setNavigation} from "../../actions/navigationAction";

class SearchRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {focus: true}
    }

    componentDidMount() {
        // root tab component need set navigation
        this.props.setNavigation(this.props.navigation)

        // need to refresh screen to call focus()
        this.props.navigation.addListener('focus', () => {
            this.setState({focus: false}, () => this.setState({focus: true}))
        });
    }

    getColors(colors) {
        if (colors.length < 2)
            return {first: firstColor, second: secondColor}
        return {first: colors[0], second: colors[1]}
    }

    render() {
        let results = this.props.results.cards
        const best_result = results?.shift()

        let best_card = best_result ?
            <TestCard
                key={0}
                navigation={this.props.navigation}
                title={best_result.title}
                backgroundColor={this.getColors(best_result.colors)}
                subTitle={best_result.sub_title}
                likes={best_result.likes}
                plays={best_result.plays}
                test_t_id={best_result.id}
                author={best_result.author}
            /> : null

        const cards = results?.map((result, key) => <SearchRoom_Card key={key}/>)
        return (
            <View>
                <SearchRoom_InputField focus={this.state.focus}/>
                {this.props.progress ? <ActivityIndicator size="small" color={secondaryColor}/> :
                    <View>{best_card}{cards}</View>}
            </View>
        )

    }
}

export default connect(
    state => ({
        progress: state.search_progress,
        results: state.search_results
    }),
    dispatch => ({
        setNavigation: (current) => dispatch(setNavigation(current))
    }))(SearchRoom);
