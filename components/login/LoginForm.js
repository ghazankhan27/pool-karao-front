import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import { colors, fonts, fontSizes } from "../../styles/theme";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import SignupModal from "../../screens/SignupModal";

export default function LoginForm() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [showSignupModal, setShowSignupModal] = useState(false);

  const submitForm = () => {};

  const toggleModal = () => {
    setShowSignupModal(!showSignupModal);
  };

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
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ForgotPassword = () => {
    return (
      <TouchableOpacity style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>
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
      <View>
        <InputField
          label={"Email"}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={"someone@example.com"}
          validate={validateEmail}
          customError={"Please enter a valid email"}
        ></InputField>
        <InputField
          label={"Password"}
          value={password}
          onChangeText={onChangePassword}
          security={true}
          placeholder={"password"}
          validate={validatePassword}
          customError={"Password should be at least 6 characters long"}
        ></InputField>
      </View>
      <LoginButtonContainer></LoginButtonContainer>
      <SignUpMessageContainer></SignUpMessageContainer>
      <ForgotPassword></ForgotPassword>
      <SignupModal
        toggleModal={toggleModal}
        show={showSignupModal}
      ></SignupModal>
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
    fontSize: fontSizes.xsmall,
    fontFamily: fonts.light,
    marginBottom: 5,
  },
  link: {
    textDecorationLine: "underline",
    fontSize: fontSizes.xsmall,
    fontFamily: fonts.semibold,
  },
});
