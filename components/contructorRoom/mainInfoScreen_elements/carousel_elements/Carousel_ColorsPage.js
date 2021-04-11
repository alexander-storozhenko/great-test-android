import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
} from "react-native";
import Constructor_SmallButton from "./colorsPage_elements/ColorsPage_SmallButton";
import ColorsPage_ColorPicker from "./colorsPage_elements/ColorsPage_ColorPicker";

class Carousel_ColorsPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btns}>
                    <Constructor_SmallButton id={0}>Яркие</Constructor_SmallButton>
                    <View style={{marginLeft: 5}}><Constructor_SmallButton id={1}>Темные</Constructor_SmallButton></View>
                    <View style={{marginLeft: 5}}><Constructor_SmallButton id={2}>Светлые</Constructor_SmallButton></View>
                </View>
                <View style={styles.colors}>
                    <ColorsPage_ColorPicker/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        position: 'relative',
        width: '100%',
    },
    btns: {
        flexDirection: 'row',
    },
    colors:{

    }
})

export default connect(
    null,
    dispatch => ({})
)(Carousel_ColorsPage);
