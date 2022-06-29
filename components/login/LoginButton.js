import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, fonts, fontSizes } from "../../styles/theme";

export default function LoginButton({ submit }) {
  return (
    <TouchableOpacity style={styles.container} onPress={submit}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.neutral,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 40,
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: fontSizes.small,
    fontFamily: fonts.primary,
  },
});
