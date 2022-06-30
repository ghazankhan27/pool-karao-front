import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, fonts, fontSizes } from "../../styles/theme";

export default function SignupButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginVertical: 20,
    borderColor: colors.neutral,
    borderWidth: 2,
  },
  text: {
    fontSize: fontSizes.small,
    fontFamily: fonts.secondary,
    color: colors.neutral,
  },
});
