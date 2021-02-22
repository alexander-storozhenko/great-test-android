import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from "react-native";
import TestPreviewRoom_Card from './elements/TestPreviewRoom_Card'
import { fontBold, h2, mt_20, mt_30, mt_10, secondaryColor } from '../StyleConstants';
import BigButton from '../bigButton/BigButton';
import { showNavBar } from '../../actions/navBarAction';
import { getPreviewInfo, setTestData } from '../../actions/testsAction';
import { navigationRef } from '../../lib/NavigationService';

class TestPreviewRoom extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onGetPreviewInfo(this.props.testTData.test_t_id)
        console.log(' this.props.loading ' +   this.props.loading)
    }

    render() {
        return (
            <View>
                {
                    this.props.loading ? <Text>Loading...</Text> :
                        <View style={styles.preview}>
                            <Text style={styles.title}>Title test kok kek</Text>
                            <View style={{ ...mt_10, width: '100%' }}>
                                <TestPreviewRoom_Card />
                            </View>
                            <View style={{ width: '100%', position: 'absolute', bottom: 20 }}>
                                <BigButton onPress={() => {
                                    this.props.navigation.push('Test', { test_id: this.props.previewInfo.test_id })
                                }
                                }>Start!</BigButton>
                            </View>
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        position: 'relative',
        height: "100%",
        backgroundColor: "white",
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        ...mt_30,
        fontSize: h2,
        fontFamily: fontBold,
        color: secondaryColor,
    }
})
export default connect(
    state => ({
        previewInfo: state.testPreviewInfo,
        loading: state.testPreviewLoading,
        testTData: state.testTData
    }),
    dispatch => ({
        onGetPreviewInfo: (test_t_id) => dispatch(getPreviewInfo(test_t_id)),
        onShowNavBar: (state) => dispatch(showNavBar(state)),
    })
)(TestPreviewRoom);
