import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet, Dimensions,
} from "react-native";
import {fontBold, h2, h3, roomPadding} from '../StyleConstants';
import {showNavBar} from '../../actions/navBarAction';
import Params_QuestionTypeBox from "./paramsScreen_elements/Params_QuestionTypeBoxOne";
import BottomButton from "../ui/BottomButton";
import {navigate} from "../../lib/NavigationService";
import {getLocaledString} from "../../lib/locale/locale";
import Carousel from "react-native-snap-carousel";
import Params_QuestionTypeBoxOne from "./paramsScreen_elements/Params_QuestionTypeBoxOne";

class Constructor_ParamsScreen extends Component {
    constructor(props) {
        super(props)
    }

    _renderItem = ({item, _}) => (<View style={styles.item}>{item}</View>)

    render() {
        const carousel_width = Dimensions.get('window').width - roomPadding * 2;
        const itemWidth = carousel_width - 100;
        const children = React.Children.toArray(
            [<Params_QuestionTypeBoxOne/>, <Params_QuestionTypeBoxOne/>]
        )

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Тип вопроса 🛠</Text>

                <View>
                    <Carousel
                        ref={(c) => this._carousel = c}
                        data={children}
                        renderItem={this._renderItem}
                        sliderWidth={carousel_width}
                        itemWidth={itemWidth}
                        onBeforeSnapToItem={(i) => {
                        }}
                    />
                </View>

                <Text style={styles.title}>Время на ответ ⏱</Text>

                <View style={styles.next_btn_container}>
                    <View style={styles.next_btn}>
                        <BottomButton onPress={() => navigate('ConstructorParams')}>Далее</BottomButton>
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
    title: {
        fontSize: h3,
        paddingTop: 20,
        paddingBottom: 20,
        fontFamily: fontBold
    },
    next_btn_container: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    next_btn: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
})

export default connect(
    null,
    dispatch => ({
        onSetTestTemplateData: (data) => dispatch({type: 'TEST/SET_TEST_T_DATA', payload: data}),
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(Constructor_ParamsScreen);
