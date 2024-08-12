import React from "react";
import { Input } from "../Input/Input";
import { useState } from "react";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateDate,
} from "../utils/validation";

export const SignupForm = () => {
  //States
  //input state
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
  });
  //Error state
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    dateError: "",
  });
  //Form submit status state
  const [formStatus, setFormStatus] = useState(false);

  //Function for Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(inputValue.name);
    const emailError = validateEmail(inputValue.email);
    const passwordError = validatePassword(inputValue.password);
    const dateError = validateDate(inputValue.date);
    console.log("Date : ", inputValue.date);
    console.log("Date Error : ", dateError);
    if (nameError) {
      setError({ ...error, nameError: nameError });
    } else if (emailError) {
      setError({ ...error, emailError: emailError });
    } else if (passwordError) {
      setError({ ...error, passwordError: passwordError });
    } else if (dateError) {
      setError({ ...error, dateError: dateError });
    } else {
      setFormStatus(true);
      alert(`Form submitted...
        Name : ${inputValue.name}
        Email : ${inputValue.email}
        Password : ******
        Date : ${inputValue.date}`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*First Name  */}
        <Input
          label={"First Name"}
          id={"fname"}
          name={"fname"}
          type={"text"}
          onChange={(e) => {
            setInputValue({ ...inputValue, name: e.target.value });
            setError({ ...error, nameError: validateName(e.target.value) });
          }}
          error={error.nameError}
        />

        {/*Email */}
        <Input
          label={"Email"}
          id={"email"}
          name={"email"}
          type={"text"}
          onChange={(e) => {
            setInputValue({ ...inputValue, email: e.target.value });
            setError({ ...error, emailError: validateEmail(e.target.value) });
          }}
          error={error.emailError}
        />

        {/*Password */}
        <Input
          label={"Password"}
          id={"password"}
          name={"password"}
          type={"password"}
          onChange={(e) => {
            setInputValue({ ...inputValue, password: e.target.value });
            setError({
              ...error,
              passwordError: validatePassword(e.target.value),
            });
          }}
          error={error.passwordError}
        />
        {/*Date */}
        <Input
          label={"Date"}
          id={"date"}
          name={"date"}
          type={"date"}
          onChange={(e) => {
            setInputValue({ ...inputValue, date: e.target.value });
            setError({ ...error, dateError: validateDate(e.target.value) });
          }}
          error={error.dateError}
        />

        <Input type={"submit"} />
      </form>
    </>
  );
};
