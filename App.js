import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ReadStoryScreen} from './screens/ReadStoryScreen';
import {WriteStoryScreen} from './screens/WriteStoryScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen:WriteStoryScreen,
  ReadStoryScreen:ReadStoryScreen
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName= navigation.state.routeName;
    console.log(RouteName);
    if(routeNmae==="WriteStoryScreen"){
      return(
        <Image 
        source={require("./PRO+C70+Images/write.png")}
        style={{width:40, height:40}} />
      )
    }else if (routeNmae==="ReadStoryScreen"){
      return(
        <Image 
        source={require("./PRO+C70+Images/read.png")}
        style={{width:40, height:40}} />
      )
    }


  }

})
}
)

const AppContainer= createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
