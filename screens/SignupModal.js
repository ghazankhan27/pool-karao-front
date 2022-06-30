import {
  Modal,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import InputField from "../components/login/InputField";
import { colors, fonts, fontSizes } from "../styles/theme";
import { Ionicons } from "@expo/vector-icons";
import SignupButton from "../components/signup/SignupButton";

export default function SignupModal({ show, toggleModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const TitleContainer = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>
          Please fill the required* information to sign up
        </Text>
      </View>
    );
  };

  const CloseIcon = () => {
    return (
      <TouchableOpacity
        onPress={toggleModal}
        style={{ position: "absolute", top: 30, right: 10 }}
      >
        <Ionicons name="close" size={36} color={colors.ternary} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      hardwareAccelerated={true}
      onRequestClose={toggleModal}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <CloseIcon></CloseIcon>
          <TitleContainer></TitleContainer>
          <View style={styles.formContainer}>
            <View style={{ height: 20 }}></View>
            <InputField
              label={"Name*"}
              value={name}
              onChangeText={setName}
              placeholder="full name"
              validate={() => true}
            ></InputField>
            <InputField
              label={"Email*"}
              value={email}
              onChangeText={setEmail}
              placeholder="email"
              validate={() => true}
            ></InputField>
            <InputField
              label={"Password*"}
              value={password}
              onChangeText={setPassword}
              placeholder="password"
              security={true}
              validate={() => true}
            ></InputField>
            <InputField
              label={"Confirm Password*"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="retype your password"
              security={true}
              validate={() => true}
            ></InputField>
            <SignupButton></SignupButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    paddingVertical: StatusBar.currentHeight,
  },
  titleContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: fontSizes.large,
    color: colors.background,
    textAlign: "center",
    fontFamily: fonts.bold,
  },
  subtitle: {
    marginVertical: 12,
    fontSize: fontSizes.small,
    color: colors.background,
    fontFamily: fonts.primary,
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
});
