import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !accountNumber || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    Alert.alert("Success", "Registration Completed");
    console.log({ name, email, accountNumber, password });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: "center" ,borderWidth:1,backgroundColor:'#720509ff'}}>
         Zemne Bank Registration
      </Text>

      <TextInput
        placeholder="Full Name"
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Account Number"
        keyboardType="numeric"
        onChangeText={setAccountNumber}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Password"
        keyboardType="numeric"
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 10, marginBottom: 15 }}
      />

      <Button title="Register" onPress={handleRegister}
      style={{backgroundColor:'#8a0b0bff', borderWidth: 3}} />
    </View>
  );
}
