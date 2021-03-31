import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import {
    fontBold,
    fontMedium,
    h2,
    h3,
    h4,
    lightColor,
    titleColor,
    subTitleColor,
    titleColorLight,
    subTitleColorLight,
    primaryColor,
    borderRadius, tabHeight
} from '../../StyleConstants';

class Params_QuestionTypeBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>1->1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 50,
        height: 50,
        borderRadius: borderRadius,
        borderWidth:2

    },
    carousel_container: {
        paddingTop:10
    },
    next_btn_container: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    next_btn: {
        position: 'relative',
        width: '100%',
        flexDirection:'row',
        justifyContent: 'center'
    }
})

export default connect(
    null,
    dispatch => ({

    })
)(Params_QuestionTypeBox);
