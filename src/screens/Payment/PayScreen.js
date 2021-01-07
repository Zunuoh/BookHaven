import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const PayScreen = () =>{
    return(
        <View style={{flex:1, padding:40}}>
            <View style={{paddingTop:40, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30, fontWeight:"bold"}}>PAYMENT METHODS</Text>
            </View>

            <View style={{flexDirection:"row", paddingTop:40, justifyContent:"space-between"}}>
                <View style={{marginRight:20, width:70, height:50, borderRadius:30}}>
                <Image source={require("../../../assets/visa.png")} style={{width:60, height:50}}/>
                </View>
                <View style={{marginRight:30}}>
                <Image source={require("../../../assets/mcard.png")} style={{width:60, height:50}}/>
                </View>
                <View style={{marginRight:20}}>
                <Image source={require("../../../assets/momo2.png")} style={{width:60, height:50}}/>
                </View>
            </View>

            <View style={{paddingTop:50}}>
                <Text style={{fontSize:15, color:"black", fontWeight:"bold"}}>CARD NUMBER</Text>
                <View style={{height:50, width:290, marginTop:10, borderWidth:.5, borderColor:"#A1A1A1", padding:10}}>
                <TextInput
                placeholder=""/>
                </View>
            </View>

            <View style={{flexDirection:"row"}}>
            <View>
            <Text style={{paddingTop:40, color:"black", fontWeight:"bold"}}>EXPIRATION DATE</Text>
            <View style={{height:50, width:130, marginTop:5, borderWidth:.5, borderColor:"#A1A1A1", padding:10, justifyContent:"center"}}>
                <TextInput
                placeholder="MM/YY"/>
                </View>
            </View>

            <View style={{marginLeft:50}}>
            <Text style={{paddingTop:40, color:"black", fontWeight:"bold"}}>CVV</Text>
            <View style={{height:50, width:100, marginTop:5, borderWidth:.5, borderColor:"#A1A1A1", padding:10, justifyContent:"center"}}>
                <TextInput 
                placeholder=""/>
                </View>
            </View>
            </View>

            <View style={{paddingTop:40, }}>
                <Text style={{fontSize:15, color:"black", fontWeight:"bold"}}>CARD HOLDERS NAME</Text>
                <View style={{height:50, width:290, marginTop:10, borderWidth:.5, borderColor:"#A1A1A1", padding:10,}}>
                <TextInput
                placeholder=""/>
                </View>
            </View>

            <TouchableOpacity style={{width:290, height:50, backgroundColor:"#EF8716", marginTop:50, justifyContent:"center", alignItems:"center", shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,

          elevation: 7,}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>CONFIRM PAYMENT</Text>
            </TouchableOpacity>
            
          
        </View>
    )
}

export default PayScreen;