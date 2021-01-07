import React, { useState } from 'react';
import {View, Text, TextInput, ScrollView, Image} from 'react-native';
import { Feather } from "@expo/vector-icons";

const bookList = [{"id":"0", "name":"Mary Poppins", "author":"P.LTowers", "image":require("../../../assets/book1.png")}, {"id":"1", "name":"Jog On", "author":"Bella Macke", "image":require("../../../assets/book3.png")}, {"id":"2", "name":"Ninth Street", "author":"P.LTowers", "image":require("../../../assets/book4.png")},
{"id":"3", "name":"Mary Down", "author":"P.LTowers", "image":require("../../../assets/book5.png")}]

const bookList2 = [{"id":"0", "name":"Mary Poppins", "author":"P.LTowers", "image":require("../../../assets/book6.jpeg")}, {"id":"1", "name":"Jog On", "author":"Bella Macke", "image":require("../../../assets/book7.png")}, {"id":"2", "name":"Ninth Street", "author":"P.LTowers", "image":require("../../../assets/book8.jpeg")},
{"id":"3", "name":"Mary Down", "author":"P.LTowers", "image":require("../../../assets/book9.jpeg")}]

const HomeScreen = () => {
    const[books, setBooks] = useState(bookList);
    const[newbooks, setNewbooks] = useState(bookList2);
    return(
        <View style={{flex:1, padding:20, backgroundColor:"#F9F9F9"}}>
            <View style={{paddingTop:40, flexDirection:"row"}}>
                <View>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Discover</Text>
                </View>
                <View>
                <Feather
          style={{ paddingLeft: 200 }}
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
          style={{paddingLeft:110}}
          name="search"
          size={24}
          color="black"
        />
            </View>

            <View style={{paddingTop:20}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Explore eBook</Text>
            </View>

            <View style={{paddingTop:10, shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,

          elevation: 7,}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{backgroundColor:"#FAFAFA", width:150, height:55, marginRight:10, flexDirection:"row", alignItems:"center", padding:10}}>
                        <Image source={require('../../../assets/paint4.jpeg')} style={{width:30, height:30}}/>
                        <View style={{paddingLeft:5}}>
                        <Text style={{fontWeight:"600", fontSize:20}}>Best seller</Text>
                        <Text>1000 books</Text>
                        </View>
                    </View>

                    <View style={{backgroundColor:"white", width:145, height:55, marginRight:10, flexDirection:"row", alignItems:"center", padding:10}}>
                        <Image source={require('../../../assets/paint2.jpeg')} style={{width:30, height:30}}/>
                        <View style={{paddingLeft:5}}>
                        <Text style={{fontWeight:"600", fontSize:20}}>Best seller</Text>
                        <Text>1000 books</Text>
                        </View>
                    </View>

                    <View style={{backgroundColor:"white", width:145, height:55, marginRight:10, flexDirection:"row", alignItems:"center", padding:10, }}>
                        <Image source={require('../../../assets/paint3.jpeg')} style={{width:30, height:30}}/>
                        <View style={{paddingLeft:5}}>
                        <Text style={{fontWeight:"600", fontSize:20}}>Best seller</Text>
                        <Text>1000 books</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={{paddingTop:20}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Recommended eBook</Text>
            </View>

            <View style={{paddingTop:20, flexDirection:"row", }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {books && books.map((book=>{
                    return(
                    <View style={{marginRight:15}}>
                   <Image source={book.image} style={{width:92, height:150, borderRadius:10}}/>
                   <Text style={{paddingTop:10, fontWeight:"700"}}>{book.name}</Text>
                   <Text style={{paddingTop:5, fontWeight:"400"}}>{book.author}</Text>
                </View>
                    )
                }))}
                </ScrollView>        
            </View>

            <View style={{paddingTop:30, flexDirection:"row"}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Popular AudioBook</Text>
                <Text style={{paddingLeft:150, fontWeight:"bold"}}>More</Text>
            </View>

            <View style={{paddingTop:20, flexDirection:"row", }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {newbooks && newbooks.map((newbook=>{
                    return(
                    <View style={{marginRight:15}}>
                   <Image source={newbook.image} style={{width:92, height:150, borderRadius:10}}/>
                   <Text style={{paddingTop:10, fontWeight:"700"}}>{newbook.name}</Text>
                   <Text style={{paddingTop:5, fontWeight:"400"}}>{newbook.author}</Text>
                </View>
                    )
                }))}
                </ScrollView>        
            </View>
        </View>
    );

}
export default HomeScreen;