import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {fontLight, fontMedium, fontRegular, lightColor} from "../../StyleConstants";

class SearchRoom_Card extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.setState({focus: true})
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
        backgroundColor: 'red',
    },
    text_input: {
        fontFamily: fontMedium,
        padding:10,
        height: 50,
        borderRadius:5,
        backgroundColor: lightColor,
        // color: '#acacac',
        width: '100%'
    }
})

export default SearchRoom_Card;
