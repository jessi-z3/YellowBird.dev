import React from "react";

import { StyleSheet, Text, TextInput, View, Dimensions, Pressable } from "react-native";

import { useFonts } from "expo-font";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";

export  default function Contact(){
    const [name, onChangeName] = React.useState("John Doe");
    const [email, onChangeEmail] = React.useState("example@email.com");
    const [phone, onChangePhone] = React.useState("555-555-5555");
    const [message, onChangeMessage] = React.useState("Message")

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
    Nunito_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={[styles.h1, styles.yellowText]}>Keep in Touch</Text>
      <View style={styles.row}>
        <Text style={styles.h2}>Name:</Text>
        <TextInput
          style={[styles.box, styles.paragraph]}
          value={name}
          onChangeText={onChangeName}
        ></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.h2}>E-Mail:</Text>
        <TextInput
          style={[styles.box, styles.paragraph]}
          value={email}
          onChangeText={onChangeEmail}
        ></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.h2}>Phone:</Text>
        <TextInput
          style={[styles.box, styles.paragraph]}
          value={phone}
          onChangeText={onChangePhone}
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.h2}>Message:</Text>
        <TextInput
          editable
          multiline
          style={[styles.box, styles.paragraph]}
          value={message}
          onChangeText={onChangeMessage}
          numberOfLines={4}
          maxLength={200}
        ></TextInput>
      </View>
      <View style={{ padding: 10, alignSelf: "flex-end" }}>
        <Pressable style={[]} onPress={() => {}}>
          <Text style={[styles.h2, styles.yellowText]}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 25,
  },
  yellowText: {
    color: "#EFE65C",
  },
  h1: {
    fontSize: 26,
    fontFamily: "Pacifico_400Regular",
  },
  h2: {
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
    color: "white",
  },
  paragraph: {
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
    color: "black",
    paddingHorizontal: 5,
  },
  h3: {
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 20,
    marginTop: 15,
  },
  box: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 15,
    width: 250,
    height: 35,
    alignContent: "flex-end",
  },
});
