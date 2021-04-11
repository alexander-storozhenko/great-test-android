import React from 'react';
import {connect} from 'react-redux';
import {Animated} from "react-native";

import {carouselSetSecondColorBtn} from "../../../../../actions/constructorActions/carouselPageAction";
import ColorsPage_RoundButton from "./ColorsPage_RoundButton";

class ColorsPage_RoundButtonSecondColor extends ColorsPage_RoundButton {
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
        clicked_id: state.constructorCarouselSecondColorBtnClicked.btn_id,

    }),
    dispatch => ({
        setColor: (id, color) => dispatch(carouselSetSecondColorBtn(id, color))
    })
)(ColorsPage_RoundButtonSecondColor);
