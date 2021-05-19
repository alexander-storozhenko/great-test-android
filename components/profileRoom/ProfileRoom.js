import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import ProfileRoom_Avatar from "./elements/ProfileRoom_Avatar";
import ProfileRoom_UserInfo from "./elements/ProfileRoom_UserInfo";
import ProfileRoom_UserStatistics from "./elements/ProfileRoom_UserStatistics";
import ProfileRoom_ButtonsLine from "./elements/ProfileRoom_ButtonsLine";
import {contrastColor, lightColor, secondaryColor} from "../StyleConstants";
import ProfileRoom_Panel from "./elements/ProfileRoom_Panel";
import ProfileRoom_Carousel from "./elements/ProfileRoom_Carousel";
import Carousel_MyTestsPage from "./elements/carousel_elements/Carousel_MyTestsPage";
import ProfileRoom_SettingsScreen from "./ProfileRoom_SettingsScreen";
import {setNavigation} from "../../actions/navigationAction";
import {backHeader} from "../../actions/headerActions";
import Like from "../svg/Like";
import Eye from "../svg/Eye";
import {getUserData} from "../../actions/profileActions/profileUserDataAction";
import {getUserTests} from "../../actions/profileActions/profileCarouselAction";
import {rootPath} from "../../lib/Requests";

class ProfileRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {forbidden: false}
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', (e) => {
            if(this.props.route?.params?.from_login ) {
                this.props.getUserData()
              //  this.props.getUserTests()
            }
        })

        this.props.getUserData()
     //   this.props.getUserTests()

        // root tab component need to set navigation
        this.props.setNavigation(this.props.navigation)
    }

    render() {
        if (this.props.route?.params?.status === 403)
            // need to return empty view or view without API request because it will call recursive logout
            return <View/>

        return (
            <View style={styles.container}>
                <View style={styles.user_info}>
                    <View style={styles.info}>
                        <View style={styles.left_content}>
                            <ProfileRoom_Avatar url={this.props.userData?.avatar_url }/>
                            {
                                this.props.userData === [] || !this.props.userData
                                    ? <ActivityIndicator size="small" color={secondaryColor}/>
                                    :
                                    <View style={styles.user_stats}>
                                        <Eye width={20} height={20} fill={contrastColor} style={{marginTop: 5}}/>
                                        <Text style={{marginLeft: 4, marginTop: 4, color: contrastColor}}>{this.props.userData.plays}</Text>
                                        <Like width={20} height={20} fill={contrastColor} style={{marginLeft: 7}}/>
                                        <Text style={{marginLeft: 4, marginTop: 4, color: contrastColor}}>{this.props.userData.likes}</Text>
                                    </View>
                            }

                        </View>

                        <View style={styles.right_content}>
                            <ProfileRoom_UserInfo name={this.props.userData ? this.props.userData.name : '...' }/>
                            <ProfileRoom_UserStatistics/>
                            <ProfileRoom_ButtonsLine/>
                        </View>
                    </View>
                </View>
                <View style={styles.sep}/>
                <View style={styles.panel}>
                    <ProfileRoom_Panel/>
                </View>

                {this.props.userTests ?
                    <ProfileRoom_Carousel>
                        <Carousel_MyTestsPage data={this.props.userTests}/>
                        {/*<Carousel_MyTestsPage/>*/}
                        {/*<Carousel_MyTestsPage/>*/}
                    </ProfileRoom_Carousel> : null
                }
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
    state => ({
        // userDataLoading: state.profileUserDataProgress,
        userData: state.profileUserData,
        userTests: state.profileCarouselData,
    }),
    dispatch => ({
        onBack: (show) => dispatch(backHeader(show)),
        setNavigation: (current) => dispatch(setNavigation(current)),
        getUserData: () => dispatch(getUserData()),
        getUserTests: (page = 0) => dispatch(getUserTests(page)),
    }))(ProfileRoom);
