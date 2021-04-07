import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet} from "react-native";
import ProfileRoom_Logo from "./elements/ProfileRoom_Logo";
import ProfileRoom_UserInfo from "./elements/ProfileRoom_UserInfo";
import ProfileRoom_UserStatistics from "./elements/ProfileRoom_UserStatistics";
import ProfileRoom_ButtonsLine from "./elements/ProfileRoom_ButtonsLine";
import {contrastColor, lightColor} from "../StyleConstants";
import ProfileRoom_Panel from "./elements/ProfileRoom_Panel";
import ProfileRoom_Carousel from "./elements/ProfileRoom_Carousel";
import Carousel_MyTestsPage from "./elements/carousel_elements/Carousel_MyTestsPage";
import ProfileRoom_SettingsScreen from "./ProfileRoom_SettingsScreen";
import {setNavigation} from "../../actions/navigationAction";
import {backHeader} from "../../actions/headerActions";
import Like from "../svg/Like";
import Eye from "../svg/Eye";
import {currentScreenName, navigate, navigation, replace} from "../../lib/NavigationService";

class ProfileRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {forbidden: false}
    }

    componentDidMount() {
        // this.props.onBack(false)

        // root tab component need to set navigation
        this.props.setNavigation(this.props.navigation)
    }


    render() {
        if(this.props.route?.params?.status === 403)
            // need to return empty view or view without API request because it will call recursive logout
            return <View/>


        return (
            <View style={styles.container}>
                <View style={styles.user_info}>
                    <View style={styles.info}>
                        <View style={styles.left_content}>
                            <ProfileRoom_Logo/>
                            <View style={styles.user_stats}>
                                <Eye width={20} height={20} fill={contrastColor} style={{marginTop: 5}}/>
                                <Text style={{marginLeft: 4, marginTop: 4, color: contrastColor}}>1555</Text>
                                <Like width={20} height={20} fill={contrastColor} style={{marginLeft: 7}}/>
                                <Text style={{marginLeft: 4, marginTop: 4, color: contrastColor}}>3.7</Text>

                            </View>
                        </View>

                        <View style={styles.right_content}>
                            <ProfileRoom_UserInfo name={"BOGDAN_54"}/>
                            <ProfileRoom_UserStatistics/>
                            <ProfileRoom_ButtonsLine/>
                        </View>
                    </View>
                </View>
                <View style={styles.sep}/>
                <View style={styles.panel}>
                    <ProfileRoom_Panel/>
                </View>

                <ProfileRoom_Carousel>
                    <Carousel_MyTestsPage/>
                    {/*<Carousel_MyTestsPage/>*/}
                    {/*<Carousel_MyTestsPage/>*/}
                </ProfileRoom_Carousel>

                {this.props.settings ? <ProfileRoom_SettingsScreen/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    user_info: {
        paddingTop: 15,
        paddingLeft: 15,
        height: 160,
    },
    info: {
        width: '100%',
        // width: '100%',
        height: 80,
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    left_content: {
        flexDirection: 'column'
    },
    user_stats: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    right_content: {
        // width: '100%',
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    sep: {
        height: 1,
        backgroundColor: lightColor,
        width: '100%'
    },
    panel: {
        marginTop: 10,
        width: '100%'
        // backgroundColor: lightColor,
    }

})

export default connect(
    null,
    dispatch => ({
        onBack: (show) => dispatch(backHeader(show)),
        setNavigation: (current) => dispatch(setNavigation(current))
    }))(ProfileRoom);
