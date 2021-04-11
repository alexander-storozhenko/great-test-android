import React from 'react';
import {connect} from 'react-redux';
import {Animated} from "react-native";

import {
    carouselSetFirstColorBtn
} from "../../../../../actions/constructorActions/carouselPageAction";
import ColorsPage_RoundButton from "./ColorsPage_RoundButton";

class ColorsPage_RoundButtonFirstColor extends ColorsPage_RoundButton {
    constructor(props) {
        super(props)
        this.state = {size: new Animated.Value(1)}
    }
    componentDidMount() {
        if(this.props.id === 0)
            this.onClick()
    }

    onClick = () => {
        this.props.setColor(this.props.id, this.props.color)
    }
}

export default connect(
    state => ({
        clicked_id: state.constructorCarouselFirstColorBtnClicked.btn_id,
    }),
    dispatch => ({
        setColor: (id, color) => dispatch(carouselSetFirstColorBtn(id, color))
    })
)(ColorsPage_RoundButtonFirstColor);
