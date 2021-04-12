import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import {fontBold, fontRegular, h3} from "../../StyleConstants";
import {changeSlide} from "../../../actions/profileActions/profileCarouselAction";

class ProfileRoom_Panel extends Component {
    componentDidMount() {
        changeSlide(0)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 5,
        width: '100%',
        height: 50,
    },
    content: {
        width: '100%',
        position: 'relative',
    },
    title: {
        fontSize: h3,
        fontFamily: fontBold
    }

})

export default connect(
    state => ({
        title: state.profileCarouselSlideTitle,
    }),
    dispatch => ({
        changeSlide: (index)=> dispatch(changeSlide(index)),

    }))(ProfileRoom_Panel);
