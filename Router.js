import React from 'react';
import { StackNavigator , TabNavigator, DrawerNavigator} from 'react-navigation';
import home from './screens/home';
import user from './screens/user';
import detail from './screens/detail';
import menu from './screens/menu';

export const HomeStack = StackNavigator({
    scrHome :{
        screen: home
        ,navigationOptions:{
            title:"TRANG CHU"
        }
    },
    scrDetail:{ screen:detail
    ,navigationOptions:{
        title:"CHI TIET"
    }
    }
})
export const UserStack = StackNavigator({
    srcUser:{
        screen:user,
        navigationOptions:{
            title:"USER"
        }
    }
    
})


// Vơi tabbar, tham khao các prop nhe : https://reactnavigation.org/docs/navigators/tab
export const Tabs = TabNavigator({
    HOME:{screen:HomeStack
        ,navigationOptions:{
            tabBarLabel:"HOME" // dat ten co dinh, ko bi thay doi theo stack navigation
        }
    }
    ,USER:{screen:UserStack
        ,navigationOptions:{
            tabBarLabel:"USERS" // dat ten co dinh, ko bi thay doi theo stack navigation
        }
    }
},{
    tabBarPosition:'bottom' // cho ca android va ios
    , swipeEnabled:true // cho phep dùng tay gạt để chuyển tab
    ,tabBarOptions:{
        style:{
            backgroundColor:'yellow'
        }
        ,activeTintColor:'red'
        ,inactiveTintColor:'green'
       
    }
})

export const SideMenu = DrawerNavigator({
    TAB:{
        screen:Tabs
    }

},{
  drawerWidth: 300,
  drawerPosition: 'left', // do tu trai sang phai
  //contentComponent: props => <menu {...props} />,
  drawerBackgroundColor: '#fff'
  
})