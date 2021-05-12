import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    TextInput, ActivityIndicator
} from "react-native";
import {
    fontBold,
    h3,
    h4,
    borderRadius, secondaryColor
} from '../../StyleConstants';
import {ImageBackground} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {getTextColor} from "../../../lib/ColorsHelper";
import Card_ImageButton from "./card_elements/Card_ImageButton";
import * as ImagePicker from 'expo-image-picker';
import {rootPath} from "../../../lib/Requests";

class MainInfoScreen_Card extends Component {
    constructor(props) {
        super(props)
    }

    onLoadImage = async () => {
        let image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 2.1],
            quality: 1,
        })

        if (!image.cancelled)
            this.props.onStoreImg(image.uri)
    }

    render() {
        let colors, image_url, title, subtitle

        const data = this.props.data

        colors = [this.props.first_color, this.props.second_color]
        image_url = null
        title = ""
        subtitle = ""

        if(data && this.props.mode === 'edit') {
            colors = data.colors
            image_url = this.props.image || rootPath(data.image_url)
            title = data.title
            subtitle = data.sub_title
        }

        if (this.props.loading)
            return (
                <View style={styles.card}>
                    <View style={styles.loading_container}>
                        <View style={styles.loading}>
                    <ActivityIndicator size="large" color={secondaryColor}/>
                        </View>
                    </View>
                </View>
            )

        return (
            <View style={styles.card}>
                {image_url ?
                    <View style={styles.img_container}>
                        <ImageBackground style={styles.image} source={{uri: image_url}}/>
                    </View> : null}
                <LinearGradient style={styles.gradient} colors={colors}>
                    <View style={styles.card_content}>
                        <View>
                            <TextInput placeholder={'Название...'}
                                       value={title}
                                       onChangeText={text => this.props.onChangeTitle(text)}
                                       style={[{color: getTextColor(this.props.first_color)}, styles.input, styles.input_title]}/>
                        </View>
                        <View style={styles.description}>
                            <TextInput placeholder={'Описание...'}
                                       value={subtitle}
                                       onChangeText={text => this.props.onChangeSubTitle(text)}
                                       style={[{color: getTextColor(this.props.first_color)}, styles.input, styles.input_description]}/>
                        </View>
                    </View>
                    <View style={styles.img_btn}>
                        <Card_ImageButton onPress={this.onLoadImage}/>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 190,
        maxWidth: 380,
        marginTop: 15,
        borderRadius: borderRadius,
    },
    card_content: {
        width: '100%',
        height: '100%',
        padding: 10,
    },
    input: {
        width: 200,
        height: 40,
    },
    input_title: {
        fontFamily: fontBold,
        fontSize: h3
    },
    input_description: {
        fontSize: h4,
        width: 300,
    },
    gradient: {
        width: '100%',
        height: '100%',
        borderRadius: borderRadius,
        opacity: 0.83,
    },
    description: {
        paddingTop: 10,
    },
    img_btn: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',

    },
    img_container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: borderRadius,
        overflow: 'hidden'
    },
    loading_container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius,
        borderWidth: 2,
        borderColor: secondaryColor,
    },
    loading: {
        alignSelf: 'center',
    }
})

export default connect(
    state => ({
        first_color: state.constructorCarouselFirstColorBtnClicked.color,
        second_color: state.constructorCarouselSecondColorBtnClicked.color,
        image: state.constructorCardImage,
    }),
    dispatch => ({
        onChangeTitle: (title) => dispatch({type: 'CONSTRUCTOR/CARD/TITLE', payload: title}),
        onChangeSubTitle: (sub_title) => dispatch({type: 'CONSTRUCTOR/CARD/SUB_TITLE', payload: sub_title}),
        onStoreImg: (uri) => dispatch({type: 'CONSTRUCTOR/CARD/STORE_IMG', payload: uri})
    })
)(MainInfoScreen_Card);
