import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { fontBold, fontMedium, h2, h3,h4, lightColor, titleColorLight, subTitleColorLight } from '../../StyleConstants';
import Ripple from 'react-native-material-ripple';
import { LinearGradient } from 'expo-linear-gradient';
import Eye from '../../svg/Eye';
import Love from '../../svg/Love';

class MainRoom_MiniCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
         
            <View style={styles.card}>
                <LinearGradient style={{ borderRadius: 10, position:"relative", width: '100%', height: "100%" }}
                    colors={[this.props.backgroundColor.first, this.props.backgroundColor.second]}>

                    {/* ----------------------- custom absolute content here -----------------------  */}

                    <View style={styles.statistics}>
                        <View style={styles.statisticsContent}>
                            <Eye fill={lightColor} width="15" height="15"/>
                            <Text style={{marginLeft:3,  color:lightColor}} >{this.props.likes}</Text>
                            
                            <Love fill={lightColor} style={{marginLeft:8}} width="13" height="13"/>
                            <Text style={{marginLeft:3,  color:lightColor}} >{this.props.plays}</Text>        
                        </View>
                   
                    </View>

                    <Ripple style={{ padding: 10 }}>
                        <View style={{ width: '100%', height: "100%" }}>
                            <View style={styles.titleContainer}>
                                <Text style={{ fontSize: h2, fontFamily: fontBold, color: titleColorLight }}>
                                    {this.props.title}
                                </Text>
                            </View>

                            <View style={styles.subTitleContainer}>
                                <Text style={{ fontSize: h4, fontFamily: fontMedium, color: subTitleColorLight }}>
                                    {this.props.subTitle}
                                </Text>
                            </View>

                            <View>
                                
                            </View>
                        </View>
                    </Ripple>
                </LinearGradient>
                
            </View>
    
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 150,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: "#000",
        // elevation: 15,
    },
    titleContainer: {
        height: 40,
        width: '100%',
    },
    subTitleContainer: {
        height: 40,
        width: '100%',
    },
    statistics:{
        position:'absolute',
        left:10,
        bottom:8,
    },
    statisticsContent:{
        position:'relative',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center"
    }
})

export default MainRoom_MiniCard;
