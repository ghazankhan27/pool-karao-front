import {
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import Logo from "../components/login/Logo";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Logo></Logo>
        <LoginForm></LoginForm>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
});
