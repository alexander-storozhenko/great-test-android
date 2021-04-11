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
import {h3, roomPadding, contrastColor} from '../../StyleConstants';
import Carousel from "react-native-snap-carousel";
import {getLocaledString} from "../../../lib/locale/locale";

class MainInfoScreen_Carousel extends Component {
    constructor(props) {
        super(props)
    }

    _renderItem = ({item, _}) => (<View style={styles.item}>{item}</View>)


    render() {
        const carousel_width = Dimensions.get('window').width - roomPadding * 2;
        const itemWidth = carousel_width;
        const children = React.Children.toArray(this.props.children)

        return (
            <View style={styles.container}>

                <View style={styles.carousel_title}>
                    <Text style={styles.title_main}>{getLocaledString('constructor_main_info_carousel_title')}</Text>
                    <Text
                        style={styles.title_sub}>{getLocaledString('constructor_main_info_carousel_sub_title_1')}</Text>
                </View>

                {/*TODO to independent component (FullWidthCarousel)*/}
                <View>
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
    item: {
        width: '100%',
        height: '100%',
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
