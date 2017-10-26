
import React, {Component} from "react";
import {View, Text,TouchableOpacity} from "react-native";

export default class detail extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>detail</Text>
            <Text>Hello. {this.props.navigation.state.params.name}</Text>
            <TouchableOpacity style={{backgroundColor:'red',color:'#fff', fontSize:20, padding:10}}
            onPress={()=>{ this.props.navigation.goBack(); }}
            >
                <Text>Go Back</Text>
            </TouchableOpacity>
            </View>
        )
    }

}