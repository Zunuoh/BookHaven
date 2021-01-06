import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{paddingTop:40, flexDirection:"row"}}>
                <View>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Discover</Text>
                </View>
                <View>
                <Feather
          style={{ paddingLeft: 160 }}
          name="align-justify"
          size={30}
          color="black"
        />
                </View>
            </View>

            <View style={{flexDirection:"row", backgroundColor:"white", marginTop:20, height:50, width:250, borderRadius:5, padding:10,  shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,

          elevation: 7,}}>
           
              <TextInput
              placeholder="Hey, Search here"/>
               <Feather
          style={{paddingLeft:80}}
          name="search"
          size={24}
          color="black"
        />
            </View>

            <View style={{paddingTop:20}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Explore eBook</Text>
            </View>

            <View style={{paddingTop:10}}>
                <ScrollView horizontal={true}>
                    <View style={{backgroundColor:"red", width:100, height:50, marginRight:10}}>
                        <Text>Best seller</Text>
                    </View>

                    <View style={{backgroundColor:"red", width:100, height:50, marginRight:10}}>
                        <Text>Best seller</Text>
                    </View>

                    <View style={{backgroundColor:"red", width:100, height:50, marginRight:10}}>
                        <Text>Best seller</Text>
                    </View>

                    <View style={{backgroundColor:"red", width:100, height:50}}>
                        <Text>Best seller</Text>
                    </View>
                </ScrollView>
            </View>

            <View>
                <Text>Recommended eBook</Text>
            </View>
        </View>
    );

}
export default HomeScreen;