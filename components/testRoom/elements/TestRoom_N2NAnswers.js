import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import {checkedColor, contrastColor, fontBold, h2, primaryColor} from '../../StyleConstants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import TestRoom_N2NButton from "./buttons/TestRoom_N2NButton";
import {selectN2NBtn, storeUserAnswer} from "../../../actions/answersAction";

class TestRoom_N2NAnswers extends Component {
    constructor(props) {
        super(props)
        this.state = {map: {}}
    }

    _buildColorMap = () => {
        const map = {}
        let startSymbol = 'A'.charCodeAt(0)
        Object.entries(this.props.answers['up']).forEach(_ => map[String.fromCharCode(startSymbol++)] = null)
        Object.entries(this.props.answers['down']).forEach((_, index) => map[index] = null)

        this.props.setMap(map)
    }

    componentDidMount() {
        this._buildColorMap()
    }

    render() {
        if(!this.props.answers['up'] || !this.props.answers['down'])
            return <View/>

        return (
            <View>
                {[
                    Object.entries(this.props.answers['up'])
                        .map(([key, value]) =>
                            <TestRoom_N2NButton test_id={this.props.test_id} pos={'up'} id={key} key={key}
                                                active={this.props.active[key]}>{value}</TestRoom_N2NButton>),
                    Object.entries(this.props.answers['down'])
                        .map(([key, value]) =>
                            <TestRoom_N2NButton test_id={this.props.test_id} pos={'down'} id={key} key={key}
                                                active={this.props.active[key]}>{value}</TestRoom_N2NButton>)
                ]}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        width: 300,
        minHeight: 60,
        borderRadius: 10,
        elevation: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    button_text: {
        color: primaryColor,
        fontFamily: fontBold,
        fontSize: h2,
    }
})

export default connect(
    state => ({
    }),
    dispatch => ({
        setMap: (answers_color_map) => ({type: 'ANSWERS/N2N/SET_MAP', payload: answers_color_map}),
    }))(TestRoom_N2NAnswers)