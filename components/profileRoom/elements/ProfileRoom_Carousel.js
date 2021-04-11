import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Dimensions} from "react-native";
import {fontBold, h1_5, roomPadding, secondaryColor} from "../../StyleConstants";
import Carousel from "react-native-snap-carousel";
import {changeSlide} from "../../../actions/profileActions/profileCarouselAction";

class ProfileRoom_Carousel extends Component {
    _renderItem = ({ item, _ }) => (<View style={styles.container}>{item}</View>)

    _changeSlide = (index) => {
        this.props.changeSlide(index)
    }

    render() {
        const carousel_width = Dimensions.get('window').width - roomPadding * 2;
        const itemWidth = carousel_width;
        const children = React.Children.toArray(this.props.children)

        return (
            <View style={styles.container}>
                <Carousel
                    ref={(c) => this._carousel = c}
                    data={children}
                    renderItem={this._renderItem}
                    sliderWidth={carousel_width}
                    itemWidth={itemWidth}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    onBeforeSnapToItem={(i) => this._changeSlide(i)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width:90,
        height: 90,
        borderRadius: 45,
        borderWidth:3,
        borderColor: secondaryColor,
    },
    container: {
        width: '100%',
        flex:1,
    },
    title: {
        marginTop: 20,
        // marginBottom:20,
        fontSize: h1_5,
        fontFamily: fontBold,
        textAlign: 'center',
    }
})

export default connect(
    state => ({

    }),
    dispatch => ({
        changeSlide: (index)=> dispatch(changeSlide(index)),

    }))(ProfileRoom_Carousel);
