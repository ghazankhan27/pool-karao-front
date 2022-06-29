import { Image, StyleSheet, View } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 30,
    paddingVertical: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});
