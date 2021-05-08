import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Animated
} from "react-native";
import {borderRadius, fontBold, lightColor, primaryColor} from "../../../../StyleConstants";
import {LinearGradient} from 'expo-linear-gradient';
import Love from "../../../../svg/Love";
import Eye from "../../../../svg/Eye";
import {selectItem} from "../../../../../actions/profileActions/profileCarouselAction";

const startPosition = 0
const endPosition = -130

class TestCard_Card extends Component {

    constructor(props) {
        super(props);
        React.createRef()
        this.state = {
            opened: false,
            startPosition: new Animated.Value(startPosition),
            endPosition: new Animated.Value(endPosition)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id === this.props.selectedItemId)
            this.animateClose()
        else this.animateOpen()
    }

    animateClose = () => {
        Animated.spring(this.state.startPosition, {
            toValue: new Animated.Value(endPosition),
            useNativeDriver: true
        }).start();
    }

    animateOpen = () => {
        Animated.spring(this.state.startPosition, {
            toValue: new Animated.Value(startPosition),
            useNativeDriver: true
        }).start();
    }

    onClick = () => {
        if (this.props.id === this.props.selectedItemId)
            this.props.onSelectItem(null)
        else
            this.props.onSelectItem(this.props.id)
    }

    render() {
        return (
            <Animated.View style={[styles.card, {transform: [{translateX: this.state.startPosition}]}]}>
                <LinearGradient style={{borderRadius: 5, width: '100%', height: '100%', position: "relative"}}
                                colors={this.props.colors}>
                    <View style={{borderRadius: 5, overflow: 'hidden', width: '100%'}}>
                        <TouchableNativeFeedback style={{borderRadius: 5}} onPress={() => {
                            this.onClick()
                        }}><View>
                            <View style={styles.title}>
                                <Text style={styles.title_text}>{this.props.title}</Text>
                            </View>
                            <View style={styles.rating}>
                                <View style={styles.rating_container }>
                                    <Love style={styles.rating_svg} fill={primaryColor}/>
                                    <Text style={styles.rating_text}>{this.props.rating}</Text>
                                </View>
                            </View>
                            <View style={styles.plays}>
                                <View style={styles.plays_container}>
                                    <Eye style={styles.plays_svg} fill={primaryColor}/>
                                    <Text style={styles.plays_text}>{this.props.plays}</Text>

                                </View>
                            </View>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                </LinearGradient>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 60,
        marginBottom: 10,
        borderRadius: 5,
        zIndex: 2,

    },
    title: {
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 15
    },
    title_text: {
        fontSize: 18,
        fontFamily: fontBold,
        color: primaryColor,
    },
    plays: {
        right: 50,
        bottom: 18,
        position: 'absolute',
    },
    plays_container: {
        position: 'relative',
        flexDirection: 'row'
    },
    plays_text: {
        fontSize: 15,
        color: primaryColor,
    },
    plays_svg: {
        marginRight: 5,
        marginTop: 2,
        width: 17,
        height: 17
    },
    rating: {
        // flexDirection:'row',
        position: 'absolute',
        right: 15,
        bottom: 18,
    },
    rating_container: {
        position: 'relative',
        flexDirection: 'row'
    },
    rating_text: {
        fontSize: 15,
        color: primaryColor,
    },
    rating_svg: {
        marginRight: 5,
        marginTop: 2,
        width: 15,
        height: 15
    },
    btn: {
        width: 60,
        height: 60,
        borderRadius: borderRadius,
        backgroundColor: lightColor,
        right: 0,
        // marginLeft: 5,
    },

})

export default connect(
    state => ({
        selectedItemId: state.profileCarouselItemSelected
    }),
    dispatch => ({
        onSelectItem: (id) => dispatch(selectItem(id))
    })
)(TestCard_Card)
