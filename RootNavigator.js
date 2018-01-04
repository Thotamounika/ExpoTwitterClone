import React, {Component} from 'react';
import {Icon} from 'native-base';
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import SideBar from './myscreens/SideBar';
import HomeStack from './myscreens/MyHomeScreen';
import SearchStack from './myscreens/MySearchScreen';
import NotificationStack from './myscreens/MyNotificationScreen';
import MessageStack from './myscreens/MyMessageScreen';

const activeTintColor='#1DA1F2';
const inactiveTintColor='gray';
const TabNav=TabNavigator({
	Home:{
		screen:HomeStack,
		navigationOptions:{
			tabBarIcon: ({focused }) => <Icon name="home" size={35} style={{color:focused?activeTintColor:inactiveTintColor,borderTopColor: "transparent"}}/>
		},
	},
	Search:{
		screen: SearchStack,
		navigationOptions:{
			tabBarIcon: ({ focused }) => <Icon name="search" size={35} style={{color:focused?activeTintColor:inactiveTintColor}}/>
		},
	},
	Notifications:{
		screen: NotificationStack,
		navigationOptions:{
			tabBarIcon: ({ focused }) => <Icon name="md-notifications-outline" size={35} style={{color:focused?activeTintColor:inactiveTintColor}}/>
		},
	},
	Messages:{
		screen:MessageStack,
		navigationOptions:{
			tabBarIcon: ({ focused }) => <Icon name="md-mail" size={35} style={{color:focused?activeTintColor:inactiveTintColor}}/>
		},
	},
},
{			  
	tabBarOptions: {
				    
			showIcon:true,	
			showLabel:false,    
		  	style: {
    			backgroundColor: 'white',
    			
	},
  	indicatorStyle:{
  			backgroundColor:'#1DA1F2',
	},

},
	});



const StackNav=StackNavigator({

Index:{
	screen:TabNav,	
}

});



const DrawNav=DrawerNavigator({
Draw:{
	screen:StackNav,
},
},{
	contentComponent: props => <SideBar />,
drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',
});


export default DrawNav; 