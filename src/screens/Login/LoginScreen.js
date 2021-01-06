import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const HandleLogin = () => {
    {
      username == "" || password == ""
        ? alert("Kindly fill all fields")
        : alert("Success");
    }
  };
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#EF8716" }}>
      <View
        style={{
          paddingTop: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/rmv.png")}
          style={{ width: 110, height: 90 }}
        />
        {/* <Text style={{paddingTop:10}}>BOOK HAVEN</Text> */}
      </View>

      <View
        style={{
          marginTop: 70,
          flexDirection: "row",
          backgroundColor: "white",
          height: 60,
          borderRadius: 30,
          padding: 10,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,

          elevation: 7,
        }}
      >
        <Feather
          style={{ paddingLeft: 20 }}
          name="user"
          size={24}
          color="black"
        />
        <TextInput
          style={{ flex: 1, marginLeft: 10, fontSize: 20, fontWeight: "bold" }}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
      </View>

      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          backgroundColor: "white",
          height: 60,
          borderRadius: 30,
          padding: 10,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,

          elevation: 7,
        }}
      >
        <Feather
          style={{ paddingLeft: 20 }}
          name="lock"
          size={24}
          color="black"
        />
        <TextInput
          style={{ flex: 1, marginLeft: 10, fontSize: 20, fontWeight: "bold" }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View style={{ paddingLeft: 220, paddingTop: 40 }}>
        <Text>Forgot password?</Text>
      </View>

      <TouchableOpacity
        style={{
          width: 340,
          height: 60,
          backgroundColor: "white",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
        onPress={() => {
          HandleLogin();
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
