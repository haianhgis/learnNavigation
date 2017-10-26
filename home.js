import React, {Component} from "react";
import {View, Text,TouchableOpacity} from "react-native";

export default class home extends Component{
    // static navigationOptions={
    //     title:"TRANG CHU"
    // }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>HOME</Text>
            <TouchableOpacity style={{backgroundColor:'red',"color":'#fff', fontSize:20, padding:10}}
            onPress={()=>{ this.props.navigation.navigate('scrDetail',{name:"Mr Hai Anh"}); }}
            >
                <Text>Go to Detail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'red'}}
            onPress={()=>{ this.props.navigation.navigate('DrawerOpen'); }}
            >
                <Text>Go to Menu</Text>
            </TouchableOpacity>

            </View>
        )
    }

}