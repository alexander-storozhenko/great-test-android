import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from "react-native";
import {roomPadding} from '../../StyleConstants';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class MainRoom_Carousel extends Component {
    constructor(props) {
        super(props)
    }

    _renderItem = ({ item, _ }) => {
        return (
            <View>
                {item}
            </View>
        );
    }

    get pagination() {
        const { entries } = [1,2];
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={0}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(5, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    render() {
        const carouselWidth = Dimensions.get('window').width - roomPadding*2;
        const itemWidth = carouselWidth-100;

        const childs = React.Children.toArray(this.props.children)
        return (
            <View style={{height:180}}>
                <Carousel  
                    ref={(c) => { this._carousel = c; }}
                    data={childs}
                    renderItem={this._renderItem}
                    sliderWidth={carouselWidth}
                    itemWidth={itemWidth}
                />   
            </View>

        );
    }
}

const styles = StyleSheet.create({
    card: {

        width: "100%",
        height: 190,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: "#0000",
        elevation: 15,
    },
    titleContainer: {
        height: 40,
        width: '100%',
    },
    subTitleContainer: {
        height: 40,
        width: '100%',
    },
    statistics: {
        position: 'absolute',
        left: 10,
        bottom: 8,
    },
    statisticsContent: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default MainRoom_Carousel;
