import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import {AppContainer} from 'react-navigation';

export default class WriteStoryScreen extends React.Components{
    constrictor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    
    
    render(){
        return(
            <view>
                <TextInput placeHolder="Story Title" OnChangeText={(text)=>{this.setState({title:text})}} value={this.state.title}/>
                <TextInput placeHolder="Author" OnChangeText={(text)=>{this.setState({author:text})}} value={this.state.author}/>
                <TextInput placeHolder="Story" OnChangeText={(text)=>{this.setState({story:text})}} value={this.state.story}/>

                <TouchableOpacity style={{backgroundColor:'yellow'}}>
                <Text>Submit</Text>
                </TouchableOpacity>
            </view>

        )
    }
}