import {
  Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import {
  useFonts,}
  from 'expo-font';

import Carousel from "react-native-reanimated-carousel";

import * as React from "react";

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList} from 'react-native';

import Contact from './Contact';

export default function App() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  let food = [
    { Image: require("./Images/IMG_0007.jpeg") },
    { Image: require("./Images/IMG_0032.jpeg") },
    { Image: require("./Images/IMG_0269.jpeg") },
    { Image: require("./Images/IMG_0470.jpeg") },
    { Image: require("./Images/IMG_1550.jpeg") },
    { Image: require("./Images/IMG_1770.jpeg") },
    { Image: require("./Images/IMG_1812.jpeg") },
    { Image: require("./Images/IMG_2258.jpeg") },
  ];
  const width = Dimensions.get("window").width;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("./Images/black_yellowbird.gif")}
        />
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            <Text style={[styles.yellowText, styles.h1]}>
              Jessi Zimmerman{"\n"}
            </Text>
            <Text style={styles.h2}>App & Web Developer</Text>
          </Text>
          <Image
            style={styles.headshot}
            source={require("./Images/green_blouse.jpeg")}
          />
        </View>
        <Text style={styles.h3}>What's it like to work with me?</Text>
        <Text style={styles.paragraph}>
          You’ll have a constant cheerleader, a talented team-player, and
          sometimes sweets…
        </Text>
        <View style={{ margin: 15 }}>
          <Carousel
            loop
            width={width}
            height={Dimensions.get("window").height / 2.5}
            autoPlay={true}
            data={food}
            scrollAnimationDuration={3000}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={food[index].Image}
                  style={{
                    alignSelf: "center",
                    height: Dimensions.get("window").height / 2.5,
                    resizeMode: "contain",
                  }}
                />
              </View>
            )}
          />
        </View>
        <Text style={styles.paragraph}>We can always talk Star Wars,</Text>
        <Image style={styles.pic1} source={require("./Images/IMG_0958.jpeg")} />
        <Text style={styles.paragraph}>
          and if you like amazingly adorable cat pictures, I have them.
        </Text>
        <Image style={styles.pic2} source={require("./Images/IMG_3772.jpg")} />
        <Text style={styles.h3}>My Passions:</Text>
        <View style={{flex: .25}}>
          <FlatList
            data={[
              { key: "Volunteering" },
              { key: "Coding" },
              { key: "Inclusion" },
            ]}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={styles.paragraph}>
                    {"\u2022"} {item.key}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Contact></Contact>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 3000,
    justifyContent: "center",
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
    padding: 15,
  },
  paragraph: {
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
    color: "white",
    paddingHorizontal: 15,
  },
  h3: {
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginTop: 15,
  },
  headshot: {
    resizeMode: "contain",
    width: Dimensions.get("window").width / 2.5,
    alignSelf: "center",
    marginBottom: 55,
  },
  pic1: {
    resizeMode: "contain",
    width: Dimensions.get("window").width / 1.75,
    alignSelf: "center",
    paddingVertical: 15,
    flex: 1,
  },
  pic2: {
    resizeMode: "contain",
    width: Dimensions.get("window").width / 1.75,
    alignSelf: "center",
    paddingVertical: 15,
    flex: .75,
  },
  introText: {
    alignSelf: "center",
    padding: 15,
  },
  introContainer: {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
  },
});
