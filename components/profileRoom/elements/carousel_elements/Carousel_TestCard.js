import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback
} from "react-native";
import {borderRadius, lightColor, secondaryColor} from "../../../StyleConstants";
import TestCard_Card from "./test_card_elements/TestCard_Card";
import Edit from "../../../svg/Edit";
import Trash from "../../../svg/Trash";
import {navigate} from "../../../../lib/NavigationService";

class Carousel_TestCard extends Component {
    constructor(props) {
        super(props);
    }

    onPressEdit = () => {
        navigate('ConstructorMainInfo', {edit: true, test_t_id: this.props.test_t_id})
    }

    render() {
        return (
            <View style={styles.container}>
                <TestCard_Card
                    id={this.props.id}
                    title = {this.props.title}
                    plays = {this.props.plays}
                    rating = {this.props.rating}
                    colors={this.props.colors}
                />

                <TouchableNativeFeedback onPress={this.onPressEdit}>
                    <View style={[styles.btn, {right: 65}]}>
                        <Edit height={26} width={26} fill={secondaryColor}/>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                    <View style={[styles.btn, {right: 0}]}>
                        <Trash height={26} width={26} fill={secondaryColor}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        position:'relative'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: borderRadius,
        backgroundColor: lightColor,
        right:60,
        position: 'absolute'
    },

})

export default Carousel_TestCard;
