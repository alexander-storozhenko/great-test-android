import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import {connect} from "react-redux";
import {
    borderRadius,
    contrastColor,
    errorColor,
    h2,
    h3,
    h4,
    lightColor,
    secondaryColor,
    successColor
} from "../StyleConstants";

import {TouchableNativeFeedback} from "react-native";
import Backdrop from "../ui/Backdrop";
import OutMiddleButton from "../ui/OutMiddleButton";
import {addRecommend} from "../../actions/recommendsAction";
import {openDebugPanel} from "../../actions/debugAction";


class DebugPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false}
        this.ref = React.createRef();
    }

    render() {
        return (
            <View style={{position: 'absolute', width:'100%', bottom: 0}}>
                <Backdrop onChange={this.props.onOpen} open={this.props.panelOpen}>
                    <View>
                        <View style={styles.row}>
                            <OutMiddleButton onPress={this.props.onAddRecommend}> Add recommend card </OutMiddleButton>
                            {this.props.recommendsLoading ?
                                <ActivityIndicator size="small" color={secondaryColor}/> : null}
                        </View>
                    </View>
                </Backdrop>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    title: {
        fontSize: h2
    },
    percentage_line: {
        height: 100,
    },
    statistics_text: {
        fontSize: h3,
        paddingTop: 10,
    },
    statistics_container: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    rate_test: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightColor
    },
    rate_test_text: {
        fontSize: 17
    },
    to_home_content: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    }
})

export default connect(
    state => ({
        recommendsLoading: state.recommendsAddLoading,
        panelOpen: state.panelOpen
    }),
    dispatch => ({
        onOpen: (open) => dispatch(openDebugPanel(open)),
        onAddRecommend: () => dispatch(addRecommend())
    }))(DebugPanel);
