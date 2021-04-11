import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from "react-native";
import {showNavBar} from '../../actions/navBarAction';
import MainInfoPage_Card from "./mainInfoScreen_elements/MainInfoScreen_Card";
import MainInfoPage_Carousel from "./mainInfoScreen_elements/MainInfoScreen_Carousel";
import Carousel_ColorsPage from "./mainInfoScreen_elements/carousel_elements/Carousel_ColorsPage";
import SeparateLine from "../ui/SeparateLine";
import BottomButton from "../ui/BottomButton";

class Constructor_MainInfoScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <MainInfoPage_Card colors={["#6ef6ba", "#321321"]}/>
                {/*<View style={{marginTop: 20}}>*/}
                {/*    <MainInfoPage_TextColorPicker/>*/}
                {/*</View>*/}

                <View style={{marginTop: 20}}><SeparateLine/></View>
                <View style={styles.carousel_container}>
                    <MainInfoPage_Carousel>
                        <Carousel_ColorsPage/>
                    </MainInfoPage_Carousel>
                </View>
                <View style={styles.next_btn_container}>
                    <View style={styles.next_btn}>
                        <BottomButton onPress={()=> this.props.navigation.navigate('ConstructorParams')}>Далее</BottomButton>
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
        onSetTestTemplateData: (data) => dispatch({type: 'TEST/SET_TEST_T_DATA', payload: data}),
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(Constructor_MainInfoScreen);
