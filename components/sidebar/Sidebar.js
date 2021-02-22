import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Animated, StyleSheet, Dimensions } from "react-native";
import Header from "../header/Header";
import { primaryColor, secondaryColor } from "../StyleConstants";

const WINDOW_PART = 1.3

class Sidebar extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <View style={styles.sidebar}>
        </View>
      );
    } 
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  sidebar: {
    height: height,
    width: width / WINDOW_PART,
    marginLeft: (-width / WINDOW_PART) ,
    backgroundColor: secondaryColor
  },
})
export default Sidebar;
