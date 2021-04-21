import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import {h3} from '../StyleConstants';
import InputField from "../ui/InputField";
import ImageButton from "../ui/ImageButton";

class Constructor_QuestionScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_row}>
                    <View style={styles.input_container}>
                        <InputField style={styles.input}/>
                    </View>
                    <View style={styles.img_btn_container}>
                        <ImageButton/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingTop: 20,
    },
    input_container: {
        flex: 1
    },
    input: {
        height: 40
    },
    img_btn_container: {
      paddingLeft: 15,
    },
    title_row: {
        flexDirection: 'row',
        width: 300,
        alignSelf: 'center'
    }
})

export default connect(
    null,
    dispatch => ({
    })
)(Constructor_QuestionScreen);
