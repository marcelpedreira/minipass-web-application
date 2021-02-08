import * as React from "react";
import { Formik } from "formik";

// import * as Yup from "yup";

const SignUpForm = () => {
  // const SignupSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(4, I18n.t("profile.errors.min_length", { count: 4 }))
  //     .required(I18n.t("profile.errors.required")),
  //   name: Yup.string()
  //     .min(4, I18n.t("profile.errors.min_length", { count: 4 }))
  //     .required(I18n.t("profile.errors.required")),
  //   // phone: Yup.string()
  //   //   .min(11, I18n.t("profile.errors.min_length", { count: 11 }))
  //   //   .max(11, I18n.t("profile.errors.min_length", { count: 11 }))
  //   //   .required(I18n.t("profile.errors.required")),
  //   email: Yup.string()
  //     .email(I18n.t("profile.errors.email"))
  //     .required(I18n.t("profile.errors.required")),
  //   password: Yup.string()
  //     .min(8, I18n.t("profile.errors.min_length", { count: 8 }))
  //     .required(I18n.t("profile.errors.required")),
  //   confirm_password: Yup.string()
  //     .oneOf(
  //       [Yup.ref("password"), null],
  //       I18n.t("profile.errors.password_match")
  //     )
  //     .min(8, I18n.t("profile.errors.min_length", { count: 8 }))
  //     .required(I18n.t("profile.errors.required"))
  // });

  return (
    <div>todo ok</div>
    // <View style={styles.container}>
    //   <Formik
    //     validationSchema={SignupSchema}
    //     initialValues={{
    //       name: user ? user.name : "",
    //       username: user ? user.username : "",
    //       email: user ? user.email : "",
    //       password: "",
    //       confirm_password: "",
    //       phone: user && user.phone ? user.phone : "",
    //       gender:
    //         user && user.gender ? user.gender : I18n.t("profile.genders.male"),
    //       look_for:
    //         user && user.look_for
    //           ? user.look_for
    //           : I18n.t("profile.genders.female"),
    //       country: user && user.country ? user.country : "usa",
    //       state: user && user.state ? user.state : "california",
    //       language: user && user.language ? user.language : "english",
    //       birthday: user && user.birthday ? user.birthday : new Date(),
    //       description: user && user.description ? user.description : ""
    //     }}
    //     onSubmit={values => submit(values)}
    //   >
    //     {({
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //       isSubmitting,
    //       values,
    //       setFieldValue,
    //       touched,
    //       errors
    //     }) => (
    //       <View>
    //         <FormInputField
    //           inputStyle={theme.textInput}
    //           containerStyle={{ marginVertical: 5 }}
    //           placeholder={I18n.t("profile.form.name")}
    //           onChangeText={handleChange("name")}
    //           onBlur={handleBlur("name")}
    //           value={values.name}
    //           touched={touched.name}
    //           error={errors.name}
    //         />
    //         <FormInputField
    //           inputStyle={theme.textInput}
    //           containerStyle={{ marginVertical: 5 }}
    //           placeholder={I18n.t("profile.form.username")}
    //           onChangeText={handleChange("username")}
    //           onBlur={handleBlur("username")}
    //           value={values.username}
    //           touched={touched.username}
    //           error={errors.username}
    //         />
    //         <FormInputField
    //           inputStyle={theme.textInput}
    //           containerStyle={{ marginVertical: 5 }}
    //           placeholder={I18n.t("profile.form.email")}
    //           onChangeText={handleChange("email")}
    //           onBlur={handleBlur("email")}
    //           value={values.email}
    //           touched={touched.email}
    //           error={errors.email}
    //         />
    //         <FormInputField
    //           inputStyle={theme.textInput}
    //           containerStyle={{ marginVertical: 5 }}
    //           placeholder={I18n.t("profile.form.password")}
    //           onChangeText={handleChange("password")}
    //           onBlur={handleBlur("password")}
    //           secureTextEntry={true}
    //           value={values.password}
    //           touched={touched.password}
    //           error={errors.password}
    //         />
    //         <FormInputField
    //           inputStyle={theme.textInput}
    //           containerStyle={{ marginVertical: 5 }}
    //           placeholder={I18n.t("profile.form.confirm_password")}
    //           onChangeText={handleChange("confirm_password")}
    //           onBlur={handleBlur("confirm_password")}
    //           secureTextEntry={true}
    //           value={values.confirm_password}
    //           touched={touched.confirm_password}
    //           error={errors.confirm_password}
    //         />
    //         {!signUp && (
    //           <FormInputField
    //             inputStyle={theme.textInput}
    //             containerStyle={{ marginVertical: 5 }}
    //             placeholder={I18n.t("profile.form.phone")}
    //             onChangeText={handleChange("phone")}
    //             onBlur={handleBlur("phone")}
    //             value={values.phone}
    //             touched={touched.phone}
    //             error={errors.phone}
    //           />
    //         )}
    //         {!signUp && (
    //           <FormInputField
    //             inputStyle={theme.textInput}
    //             containerStyle={{ marginVertical: 5 }}
    //             placeholder={I18n.t("profile.form.description")}
    //             onChangeText={handleChange("description")}
    //             onBlur={handleBlur("description")}
    //             value={values.description}
    //             touched={touched.description}
    //             error={errors.description}
    //             multiline={true}
    //             numberOfLines={4}
    //           />
    //         )}
    //         <FormDatePickerField
    //           label={I18n.t("profile.form.birthdate")}
    //           field={"birthday"}
    //           value={values.birthday}
    //           setFieldValue={setFieldValue}
    //           containerStyle={{ marginVertical: 5 }}
    //           labelStyle={{
    //             color: theme.colors.grey1,
    //             fontSize: 16,
    //             width: "30%"
    //           }}
    //           buttonStyle={{
    //             backgroundColor: theme.colors.grey5
    //           }}
    //           pickerStyle={{
    //             height: 40,
    //             width: "65%"
    //           }}
    //           titleStyle={{
    //             color: theme.colors.grey1
    //           }}
    //           iconStyle={{ marginLeft: 10 }}
    //           iconColor={theme.colors.grey1}
    //         />
    //         <FormPickerField
    //           field={"gender"}
    //           value={values.gender}
    //           handleChange={handleChange("gender")}
    //           label={I18n.t("profile.form.gender")}
    //           containerStyle={{ marginVertical: 5 }}
    //           labelStyle={{
    //             color: theme.colors.grey1,
    //             fontSize: 16,
    //             width: "30%"
    //           }}
    //           pickerStyle={{
    //             height: 40,
    //             width: "65%",
    //             color: theme.colors.grey1
    //           }}
    //           items={[
    //             { label: I18n.t("profile.genders.male"), value: "male" },
    //             { label: I18n.t("profile.genders.female"), value: "female" }
    //           ]}
    //         />
    //         <FormPickerField
    //           field={"look_for"}
    //           value={values.look_for}
    //           handleChange={handleChange("look_for")}
    //           label={I18n.t("profile.form.look_for")}
    //           containerStyle={{ marginVertical: 5 }}
    //           labelStyle={{
    //             color: theme.colors.grey1,
    //             fontSize: 16,
    //             width: "30%"
    //           }}
    //           pickerStyle={{
    //             height: 40,
    //             width: "65%",
    //             color: theme.colors.grey1
    //           }}
    //           items={[
    //             { label: I18n.t("profile.genders.female"), value: "female" },
    //             { label: I18n.t("profile.genders.male"), value: "male" }
    //           ]}
    //         />
    //         <FormPickerField
    //           field={"country"}
    //           value={values.country}
    //           handleChange={handleChange("country")}
    //           label={I18n.t("profile.form.country")}
    //           containerStyle={{ marginVertical: 5 }}
    //           labelStyle={{
    //             color: theme.colors.grey1,
    //             fontSize: 16,
    //             width: "30%"
    //           }}
    //           pickerStyle={{
    //             height: 40,
    //             width: "65%",
    //             color: theme.colors.grey1
    //           }}
    //           items={[
    //             { label: "usa", value: "usa" },
    //             { label: "uk", value: "uk" },
    //             { label: "germany", value: "germany" },
    //             { label: "italy", value: "italy" },
    //             { label: "spain", value: "spain" }
    //           ]}
    //         />
    //         {/* <FormPickerField
    //           field={"state"}
    //           value={values.state}
    //           handleChange={handleChange("state")}
    //           label={"state:"}
    //           containerStyle={{ marginVertical: 20 }}
    //           labelStyle={{
    //             color: theme.colors.grey1,
    //             fontSize: 16
    //             // marginRight: 10
    //           }}
    //           pickerStyle={{
    //             height: 40,
    //             width: "80%"
    //           }}
    //           items={[
    //             { label: "california", value: "california" },
    //             { label: "new york", value: "new york" }
    //           ]}
    //         /> */}
    //         <FormPickerField
    //           field={"language"}
    //           value={values.language}
    //           handleChange={handleChange("language")}
    //           label={I18n.t("profile.form.language")}
    //           containerStyle={{ marginVertical: 5 }}
    //           labelStyle={{
    //             color: theme.colors.grey1,
    //             fontSize: 16,
    //             width: "30%"
    //           }}
    //           pickerStyle={{
    //             height: 40,
    //             width: "65%",
    //             color: theme.colors.grey1
    //           }}
    //           items={[
    //             { label: "english", value: "english" },
    //             { label: "spanish", value: "spanish" }
    //           ]}
    //         />
    //         <Button
    //           onPress={handleSubmit}
    //           title={I18n.t("profile.form.submit")}
    //           containerStyle={styles.submitButton}
    //           loading={isSubmitting}
    //         />
    //       </View>
    //     )}
    //   </Formik>
    // </View>
  );
};

export default SignUpForm;
