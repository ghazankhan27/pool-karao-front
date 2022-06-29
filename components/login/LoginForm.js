import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import { colors, fonts, fontSizes } from "../../styles/theme";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";

export default function LoginForm() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const submitForm = () => {};

  const TitleContainer = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Please enter your email and password
        </Text>
      </View>
    );
  };

  const LoginButtonContainer = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <LoginButton
          submit={() => {
            submitForm("soomething", password);
          }}
        ></LoginButton>
      </View>
    );
  };

  const SignUpMessageContainer = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.subtitle}>Dont have an account?{"  "}</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const validateEmail = () => {
    const valid =
      !isEmpty(email) && isEmail(email) && isLength(email, { min: 4 });
    return valid;
  };

  const validatePassword = () => {
    const valid = !isEmpty(password) && isLength(password, { min: 6 });
    return valid;
  };

  return (
    <View style={styles.formContainer}>
      <TitleContainer></TitleContainer>
      <InputField
        value={email}
        onChangeText={onChangeEmail}
        placeholder={"someone@example.com"}
        validate={validateEmail}
        customError={"Please enter a valid email"}
      ></InputField>
      <InputField
        value={password}
        onChangeText={onChangePassword}
        security={true}
        placeholder={"Password"}
        validate={validatePassword}
        customError={"Password should be at least 6 characters long"}
      ></InputField>
      <LoginButtonContainer></LoginButtonContainer>
      <SignUpMessageContainer></SignUpMessageContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.background,
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  title: {
    fontSize: fontSizes.large,
    marginBottom: 30,
    fontFamily: fonts.bold,
  },
  subtitle: {
    fontSize: fontSizes.xxsmall,
    fontFamily: fonts.light,
    marginBottom: 5,
  },
  link: {
    textDecorationLine: "underline",
    fontFamily: fonts.semibold,
  },
});
