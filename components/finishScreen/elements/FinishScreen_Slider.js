import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {
    contrastColor,
    secondaryColor
} from "../../StyleConstants";
import Slider from "@react-native-community/slider";

class FinishScreen_Slider extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.dislike}>👎</Text>
                <Slider
                    style={{flex: 1, height: 40}}
                    minimumValue={0}
                    maximumValue={12}
                    minimumTrackTintColor={secondaryColor}
                    maximumTrackTintColor={secondaryColor}
                    thumbTintColor={contrastColor}
                    step={2}
                />
                <Text style={styles.like}>👍</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    like: {
        marginBottom: 15,
        fontSize: 28
    },
    dislike: {
        fontSize: 28
    }
})

export default FinishScreen_Slider;
