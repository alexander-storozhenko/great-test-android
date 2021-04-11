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
    TextInput,
    Keyboard
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
    borderRadius, secondColor, firstColor, roomPadding, contrastColor
} from '../../StyleConstants';
import {TouchableWithoutFeedback} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {getTextColor} from "../../../lib/ColorsHelper";
import Carousel from "react-native-snap-carousel";
import {getLocaledString} from "../../../lib/locale/locale";

class MainInfoScreen_Carousel extends Component {
    constructor(props) {
        super(props)
        // this.state = {firstColor: secondColor, secondColor: secondColor}
    }

    _renderItem = ({item, _}) => (<View style={styles.item}>{item}</View>)

    _changeSlide = (index) => {
        // this.props.changeSlide(index)
    }

    render() {
        const carousel_width = Dimensions.get('window').width - roomPadding * 2;
        const itemWidth = carousel_width;
        const children = React.Children.toArray(this.props.children)

        return (
            <View style={styles.container}>

                <View style={styles.carousel_title}>
                    <Text style={styles.title_main}>{getLocaledString('constructor_main_info_carousel_title')}</Text>
                    <Text style={styles.title_sub}>{getLocaledString('constructor_main_info_carousel_sub_title_1')}</Text>
                </View>

                {/*TODO to independent component (FullWidthCarousel)*/}
                <View style={styles.carousel}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    carousel_title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    carousel: {
        // backgroundColor: 'red'

    },
    item: {
        width:'100%',
        height:'100%',
    },
    title_main: {
        fontSize: h3,
    },
    title_sub: {
        fontSize: h3,
        color: contrastColor
    }
})

export default connect(
    null,
    dispatch => ({})
)(MainInfoScreen_Carousel);
