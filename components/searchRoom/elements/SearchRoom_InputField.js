import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {fontMedium, fontRegular, lightColor} from "../../StyleConstants";
import {connect} from "react-redux";
import {searchData} from "../../../actions/searchAction";

class SearchRoom_InputField extends Component {
    constructor(props) {
        super(props);
       this.input = React.createRef();
    }

    onTextInputChange = (event) => {
        this.props.searchData(event.nativeEvent.text.trim().toLowerCase())
    }

    render() {
        this.input?.current?.focus()

        return (
            <View>
                <View style={styles.text_input_container}>
                    <TextInput
                        ref={this.input}
                        onChange={(event)=> this.onTextInputChange(event)}
                        autoFocus={true}
                        style={styles.text_input}
                        placeholder={"Введите что-нибудь..."}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text_input_container: {
        fontFamily: fontRegular,
        height: 70,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    text_input: {
        fontFamily: fontMedium,
        padding:10,
        height: 50,
        borderRadius:5,
        backgroundColor: lightColor,
        width: '100%'
    }
})

export default connect(
    state => ({
        search_results: state.search_results
    }),
    dispatch => ({
        searchData: (fragment) => dispatch(searchData(fragment)),
    }))(SearchRoom_InputField);
