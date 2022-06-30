import {
  StyleSheet,
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import Logo from "../components/login/Logo";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Logo></Logo>
        <LoginForm></LoginForm>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    justifyContent: "space-between",
    paddingVertical: StatusBar.currentHeight,
  },
});
