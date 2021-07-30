import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
// custom
import Logo from "../views/logo";
import { CustomForm, CustomFormField, SubmitButton } from "../CustomForm";

const validationSchema = Yup.object().shape({
  userEmail: Yup.string().required().email().label("Email"),
  psw: Yup.string().required().min(4).max(20).label("Password"),
});

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <CustomForm
          initialValues={{ userEmail: "", psw: "" }}
          onSubmit={(values) => console.log("values: ", values)}
          validationSchema={validationSchema}
        >
          <CustomFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon={"email"}
            keyboardType="email-address"
            name={"userEmail"}
            placeholder={"Email"}
            textContentType="emailAddress"
          />
          <CustomFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon={"lock"}
            name={"psw"}
            placeholder={"Password"}
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton title="Log in" />
        </CustomForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 25 },
});
