import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import {fontMedium, lightColor} from "../../StyleConstants";

class SearchRoom_Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.card}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 40,
    },
    text_input: {
        fontFamily: fontMedium,
        padding:10,
        height: 50,
        borderRadius:5,
        backgroundColor: lightColor,
        width: '100%'
    }
})

export default SearchRoom_Card;
