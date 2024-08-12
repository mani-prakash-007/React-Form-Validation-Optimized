import React from "react";
import { Input } from "../Input/Input";
import { useState } from "react";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateDate,
  validateHobbies,
  validateGender,
} from "../utils/validation";

export const SignupForm = () => {
  //Constants
  const hobbyOptions = ["Reading", "Traveling", " Cooking", " Sports"];
  const genderOptions = ["Male", "Female"];
  //States
  //input state
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    hobbies: [],
    gender: "",
  });
  //Error state
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    dateError: "",
    hobbyErorr: "",
    genderError: "",
  });
  //Form submit status state
  const [formStatus, setFormStatus] = useState(false);

  // Function to handle Checkbox
  const handleCheckbox = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    let updatedHobbies;

    if (isChecked) {
      updatedHobbies = [...inputValue.hobbies, value];
    } else {
      updatedHobbies = inputValue.hobbies.filter((item) => item !== value);
    }

    setInputValue({ ...inputValue, hobbies: updatedHobbies });
    setError({ ...error, hobbyErorr: validateHobbies(updatedHobbies) });
  };
  //Function to handle Radiobox
  const handleRadiobutton = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let choosenGender = "";
    if (isChecked) {
      choosenGender = value;
    } else {
      choosenGender = "";
    }
    setInputValue({ ...inputValue, gender: choosenGender });
    setError({ ...error, genderError: validateGender(choosenGender) });
  };
  //Function for Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(inputValue.name);
    const emailError = validateEmail(inputValue.email);
    const passwordError = validatePassword(inputValue.password);
    const dateError = validateDate(inputValue.date);
    const hobbyError = validateHobbies(inputValue.hobbies);
    const genderError = validateGender(inputValue.gender);
    if (nameError) {
      setError({ ...error, nameError: nameError });
    } else if (emailError) {
      setError({ ...error, emailError: emailError });
    } else if (passwordError) {
      setError({ ...error, passwordError: passwordError });
    } else if (dateError) {
      setError({ ...error, dateError: dateError });
    } else if (hobbyError) {
      setError({ ...error, hobbyErorr: hobbyError });
    } else if (genderError) {
      setError({ ...error, genderError: genderError });
    } else {
      setFormStatus(true);
      alert(`Form submitted
        Details : 
              Name : ${inputValue.name}
              Email : ${inputValue.email}
              Password : ******
              Date : ${inputValue.date}
              Hobbies : ${inputValue.hobbies}
              Gender : ${inputValue.gender}`);
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

        {/*Hobbies*/}
        <fieldset>
          <legend className="font-bold">Hobbies</legend>
          {hobbyOptions.map((hobby) => (
            <div key={hobby}>
              <input
                type="checkbox"
                name={hobby.toLowerCase()}
                id={hobby.toLowerCase()}
                value={hobby}
                className="border border-black"
                onChange={handleCheckbox}
              />
              <label htmlFor={hobby.toLowerCase()}>{hobby}</label>
            </div>
          ))}
          {error.hobbyErorr && (
            <p className="text-red-600">{error.hobbyErorr}</p>
          )}
        </fieldset>
        {/*Gender*/}
        <fieldset>
          <legend className="font-bold">Gender</legend>
          {genderOptions.map((gender) => (
            <div key={gender}>
              <input
                type="radio"
                name="gender"
                id={gender.toLowerCase()}
                value={gender}
                className="border border-black"
                onChange={handleRadiobutton}
              />
              <label htmlFor={gender.toLowerCase()}>{gender}</label>
            </div>
          ))}
          {error.genderError && (
            <p className="text-red-600">{error.genderError}</p>
          )}
        </fieldset>

        <Input type={"submit"} />
      </form>
    </>
  );
};
