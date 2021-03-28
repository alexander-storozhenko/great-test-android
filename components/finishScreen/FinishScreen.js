import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import FinishScreen_PercentageLine from "./elements/FinishScreen_PercentageLine";
import {getLocaledString} from "../../lib/locale/locale";
import {connect} from "react-redux";
import {backHeader} from "../../actions/headerActions";
import {borderRadius, errorColor, h2, h3, h4, lightColor, successColor} from "../StyleConstants";
import FinishScreen_Slider from "./elements/FinishScreen_Slider";
import BigButton from "../bigButton/BigButton";

class FinishScreen extends Component {
    componentDidMount() {
        this.props.navigation.addListener('beforeRemove', (e) => {
            if (e.data.action.type === 'GO_BACK') e.preventDefault()
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>{getLocaledString('finish_test_title')}😀</Text>
                </View>
                <View style={styles.statistics_container}>

                    <View style={styles.percentage_line}>
                        <FinishScreen_PercentageLine allValue={150} trueValue={70}/>
                    </View>

                    <Text style={styles.statistics_text}>Author's grade: A</Text>
                    <Text style={styles.statistics_text}>Lasted time: 3 min 40 sec</Text>

                </View>

                <View style={styles.to_home_content}>
                <View style={styles.rate_test}>
                    <Text style={styles.rate_test_text}>You can rate the test</Text>
                </View>

                <FinishScreen_Slider/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title_container: {
        width: '100%',
        height: 120,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
        width:'100%',
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightColor
    },
    rate_test_text:{
        fontSize: 17
    },
    to_home_content:{
        position:'absolute',
        bottom:0,
        width:'100%',
    },
    container:{
        position: 'relative',
        width:'100%',
        height:'100%',
    }
})

export default connect(state => ({
    // navigation: state.currentNavigation
}), null)(FinishScreen);
