import React from 'react';
import {View, Text, Image} from 'react-native';

const LoginScreen = () => {
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{paddingTop:50, justifyContent:"center", alignItems:"center"}}>
            <Image source={require('../../../assets/book2.jpeg')} style={{width:110, height:90}}/>
            {/* <Text style={{paddingTop:10}}>BOOK HAVEN</Text> */}
            </View>

            <View style={{paddingTop:20}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>LOG IN</Text>
            </View>
            
        </View>
    );

}
export default LoginScreen;