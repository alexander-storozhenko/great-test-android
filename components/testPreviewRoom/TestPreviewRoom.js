import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet, ActivityIndicator} from "react-native";
import TestPreviewRoom_Card from './elements/TestPreviewRoom_Card'
import {fontBold, h2, mt_20, mt_30, mt_10, secondaryColor} from '../StyleConstants';
import BigButton from '../bigButton/BigButton';
import {showNavBar} from '../../actions/navBarAction';
import {getPreviewInfo} from '../../actions/testsAction';
import {getQuestion, resetQuestionNumber} from "../../actions/questionsAction";

class TestPreviewRoom extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.resetQuestionNumber()
        this.props.onGetPreviewInfo(this.props.testTData.test_t_id)
    }

    render() {
        return (
            <View>
                {
                    this.props.loading ?
                        <View style={styles.activity_indicator_container}>
                            <ActivityIndicator size="large" color={secondaryColor}/>
                        </View> :
                        <View style={styles.preview}>
                            <Text style={styles.title}>Title test </Text>
                            <View style={{...mt_10, width: '100%'}}>
                                <TestPreviewRoom_Card/>
                            </View>
                            <View style={{width: '100%', position: 'absolute', bottom: 20}}>
                                <BigButton onPress={() => {
                                    this.props.onGetQuestion(this.props.previewInfo.test_id,0 ,this.props.navigation )
                                    // this.props.onIncreaseQuestionNumber()
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
    },
    activity_indicator_container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default connect(
    state => ({
        previewInfo: state.testPreviewInfo,
        loading: state.testPreviewLoading,
        testTData: state.testTData,
    }),
    dispatch => ({
        onIncreaseQuestionNumber: () => dispatch({type: 'QUESTION/INCREASE_NUMBER'}),
        onGetPreviewInfo: (test_t_id) => dispatch(getPreviewInfo(test_t_id)),
        onShowNavBar: (state) => dispatch(showNavBar(state)),
        onGetQuestion: (test_id, question_number, navigation) => dispatch(getQuestion(test_id, question_number, navigation)),
        resetQuestionNumber: () => dispatch(resetQuestionNumber()),
    })
)(TestPreviewRoom);
