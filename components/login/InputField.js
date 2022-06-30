import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors, fonts, fontSizes } from "../../styles/theme";

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  security,
  validate,
  customError,
}) {
  const [bg, setBg] = useState(colors.disabled);
  const [borderColor, setBorderColor] = useState(colors.disabled);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const onFocusChange = () => {
    setBg(colors.background);
    setBorderColor(colors.ternary);

    if (!error) return;

    setError(false);
    setMessage("");
  };

  const onBlurChange = () => {
    setBg(colors.disabled);
    setBorderColor(colors.disabled);
    if (validate()) return;
    setError(true);
    setMessage(customError);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: 6 }}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          { backgroundColor: bg, borderColor: borderColor },
        ]}
        placeholder={placeholder}
        secureTextEntry={security}
      ></TextInput>
      {error && <Text style={styles.error}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: fontSizes.small,
    borderWidth: 2,
    fontFamily: fonts.primary,
    marginTop: 4,
  },
  error: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.xxxsmall,
    color: colors.error,
  },
  label: {
    fontFamily: fonts.semibold,
  },
});
