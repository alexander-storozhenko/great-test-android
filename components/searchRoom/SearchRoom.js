import React, {Component} from 'react';
import {View, ActivityIndicator} from "react-native";
import SearchRoom_InputField from "./elements/SearchRoom_InputField";
import {connect} from "react-redux";
import {setDefaultUserAnswers} from "../../actions/answersAction";
import SearchRoom_Card from "./elements/SearchRoom_Card";
import {secondaryColor} from "../StyleConstants";

class SearchRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const cards = this.props.results.cards?.map((result, key) => <SearchRoom_Card key={key}/>)

        return (
            <View>
                <SearchRoom_InputField/>
                {this.props.progress ? <ActivityIndicator size="small" color={secondaryColor}/> : <View>{cards}</View>}
            </View>
        )

    }
}

export default connect(
    state => ({
        progress: state.search_progress,
        results: state.search_results
    }),
    dispatch => ({}))(SearchRoom);
