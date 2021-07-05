import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import {checkedColor, contrastColor, fontBold, h2, lightColor, primaryColor} from '../../StyleConstants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import TestRoom_N2NButton from "./buttons/TestRoom_N2NButton";
import {selectN2NBtn, storeUserAnswer} from "../../../actions/answersAction";
import TwoArrows from "../../svg/TwoArrows";

class TestRoom_N2NAnswers extends Component {
    constructor(props) {
        super(props)
        this.state = {map: {}}
    }

    _buildColorMap = () => {
        const map = {up: {}, down: {}}
        let startSymbol = 'A'.charCodeAt(0)
        Object.entries(this.props.answers['up']).forEach(_ => map['up'][String.fromCharCode(startSymbol++)] = null)
        Object.entries(this.props.answers['down']).forEach((_, index) => map['down'][index] = null)

        this.props.setMap(map)
    }

    onClickBtn = (id, pos, colorMap) => {
        this.props.selectBtn(id, pos, colorMap)
        this.forceUpdate()
    }

    componentDidMount() {
        this._buildColorMap()
    }

    render() {
        if(!this.props.answers['up'] || !this.props.answers['down'])
            return <View/>

        return (
            <View>
                {
                    Object.entries(this.props.answers['up'])
                        .map(([key, value]) =>
                            <TestRoom_N2NButton backgroundColor={this.props.colorMap['up'][key]}
                                                onClick={() => this.onClickBtn(key, 'up', this.props.colorMap)}
                                                test_id={this.props.test_id} pos={'up'} id={key} key={key}
                                                active={this.props.active[key]}>{value}</TestRoom_N2NButton>)
                }

                <View style={{width: '100%', height: 20, alignItems: 'center'}}>
                    <TwoArrows width={20} height={20} fill={lightColor}/>
                </View>

                {
                    Object.entries(this.props.answers['down'])
                        .map(([key, value]) =>
                            <TestRoom_N2NButton backgroundColor={this.props.colorMap['down'][key]}
                                                test_id={this.props.test_id} pos={'down'} id={key} key={key}
                                                onClick={() => this.onClickBtn(key, 'down', this.props.colorMap)}
                                                active={this.props.active[key]}>{value}</TestRoom_N2NButton>)
                }
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
        colorMap: state.answersColorN2NMap,
    }),
    dispatch => ({
        selectBtn: (answer_id, pos, answers_color_map) => dispatch(selectN2NBtn(answer_id, pos, answers_color_map)),
        setMap: (answers_color_map) => dispatch({type: 'ANSWERS/N2N/SET_MAP', payload: answers_color_map}),
    }))(TestRoom_N2NAnswers)