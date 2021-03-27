import React, {Component} from 'react';
import {View, Text} from "react-native";
import FinishScreen_PercentageLine from "./elements/FinishScreen_PercentageLine";
import {getLocaledString} from "../../lib/locale/locale";
import {connect} from "react-redux";
import {backHeader} from "../../actions/headerActions";

class FinishScreen extends Component {
    componentDidMount() {
        this.props.navigation.addListener('beforeRemove', (e) => {
            if (e.data.action.type === 'GO_BACK') e.preventDefault()
        })
    }

    render() {
        return (
            <View>
                <Text>{getLocaledString('finish_test_title')}</Text>
                <FinishScreen_PercentageLine percent={0.7}/>
            </View>
        );
    }
}

export default  connect(state => ({
    // navigation: state.currentNavigation
}), null)(FinishScreen);
