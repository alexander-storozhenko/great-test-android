import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,TouchableNativeFeedback
} from "react-native";
import {
    h3,
    borderRadius, secondaryColor, contrastColor
} from '../../../../StyleConstants';
import {
    carouselSetColorTypeBtn
} from "../../../../../actions/constructorActions/carouselPageAction";
import {constructorCarouselColorTypeBtnClicked} from "../../../../../reducers/constructorReducers/carouselReducer";

class ColorsPage_SmallButton extends Component {
    constructor(props) {
        super(props)
    }
    onClick = () => {
        this.props.setType(this.props.id)
    }

    render() {
        const color = this.props.clicked_id === this.props.id ? contrastColor : secondaryColor
        const style = {borderColor: color}
        const text_style = {color: color}

        return (
            <View>
                <TouchableNativeFeedback onPress={()=>this.onClick()}>
                    <View style={[styles.btn, style]}>
                        <Text style={[styles.text,text_style]}>{this.props.children}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: borderRadius,
        borderWidth: 2,
        padding:5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text:{
        fontSize: h3,
    }
})

export default connect(
    state => ({
        clicked_id: state.constructorCarouselColorTypeBtnClicked
    }),
    dispatch => ({
        setType: (id) => dispatch(carouselSetColorTypeBtn(id)),
        onSetTestTemplateData: (data) => dispatch({ type: 'TEST/SET_TEST_T_DATA', payload: data }),
    })
)(ColorsPage_SmallButton);
