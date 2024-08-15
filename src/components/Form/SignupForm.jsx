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
    nationality: "Indian",
    otherNationality: "None",
  });
  //Error state
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    dateError: "",
    hobbyErorr: "",
    genderError: "",
    otherNationalityError: "",
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
  //Function to handle Dropdown menu
  const handleDropdown = (e) => {
    if (inputValue.nationality === "Indian") {
      setInputValue({ ...inputValue, otherNationality: "None" });
    }
    setInputValue({ ...inputValue, nationality: e.target.value });
  };
  //Function for reset
  const handleReset = () => {
    setInputValue({
      name: "",
      email: "",
      password: "",
      date: "",
      hobbies: [],
      gender: "",
      nationality: "Indian",
      otherNationality: "None",
    });
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
    const otherNationalityError = validateName(inputValue.otherNationality);
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
    } else if (inputValue.nationality === "other" && otherNationalityError) {
      setError({ ...error, otherNationalityError: otherNationalityError });
    } else {
      setFormStatus(true);
      alert(`Form submitted
          Details :
                Name : ${inputValue.name}
                Email : ${inputValue.email}
                Password : ******
                Date : ${inputValue.date}
                Hobbies : ${inputValue.hobbies}
                Gender : ${inputValue.gender}
                Nationality : ${inputValue.nationality}
                Other Nationality : ${inputValue.otherNationality}`);
    }
  };
  return (
    <>
      {formStatus ? (
        <>
          {console.log(inputValue.hobbies)}
          <h2 className="my-4 text-xl font-bold text-green-600 pl-14">
            Registration Success
          </h2>
          <h2 className="my-2 text-lg font-bold">Registration Details</h2>
          <ul className="mx-5">
            <li>
              <span className="font-bold">Name : </span> {inputValue.name}
            </li>
            <li>
              <span className="font-bold">Email : </span> {inputValue.email}{" "}
            </li>
            <li>
              <span className="font-bold">Password : </span> ********{" "}
            </li>
            <li>
              <span className="font-bold">Date of birth : </span>{" "}
              {inputValue.date}
            </li>
            <li>
              <span className="font-bold">Hobbies : </span>{" "}
              {inputValue.hobbies.join(", ")}
            </li>
            <li>
              <span className="font-bold">Gender : </span> {inputValue.gender}
            </li>
            <li>
              <span className="font-bold">Nationality: </span>{" "}
              {inputValue.nationality}
            </li>
            <li>
              <span className="font-bold">Other Nationality : </span>{" "}
              {inputValue.otherNationality}
            </li>
          </ul>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="m-5">
          {/*First Name  */}
          <Input
            label={"First Name"}
            id={"fname"}
            name={"fname"}
            type={"text"}
            className={`${error.nameError ? "border-red-600" : "border-black"}`}
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
            className={`${
              error.emailError ? "border-red-600" : "border-black"
            }`}
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
            className={`${
              error.passwordError ? "border-red-600" : "border-black"
            }`}
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
            className={`${
              error.dateError ? "border-red-600 text-red-600" : "border-black"
            }`}
            onChange={(e) => {
              setInputValue({ ...inputValue, date: e.target.value });
              setError({ ...error, dateError: validateDate(e.target.value) });
            }}
            error={error.dateError}
          />

          {/*Hobbies*/}
          <fieldset>
            <legend className="font-bold ">Hobbies</legend>
            {hobbyOptions.map((hobby) => (
              <div key={hobby}>
                <input
                  type="checkbox"
                  name={hobby.toLowerCase()}
                  id={hobby.toLowerCase()}
                  value={hobby}
                  className="mr-3 border border-black"
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
                  className="mr-3 border border-black"
                  onChange={handleRadiobutton}
                />
                <label htmlFor={gender.toLowerCase()}>{gender}</label>
              </div>
            ))}
            {error.genderError && (
              <p className="text-red-600">{error.genderError}</p>
            )}
          </fieldset>
          {/*Nationality*/}
          <label htmlFor="nationality" className="font-bold">
            Nationality
          </label>
          <br />
          <select
            name="nationality"
            id="nationality"
            className="border border-black"
            onChange={handleDropdown}
          >
            <option value="Indian">Indian</option>
            <option value="Other">Other</option>
          </select>
          <br />
          {inputValue.nationality === "Other" && (
            <>
              <Input
                label={"Specify Nationality"}
                id={"otherNationality"}
                name={"otherNationality"}
                type={"text"}
                className={`${
                  error.otherNationalityError
                    ? "border-red-600"
                    : "border-black"
                }`}
                onChange={(e) => {
                  setInputValue({
                    ...inputValue,
                    otherNationality: e.target.value,
                  });
                  setError({
                    ...error,
                    otherNationalityError: validateName(e.target.value),
                  });
                }}
                error={error.otherNationalityError}
              />
            </>
          )}
          <div className="flex flex-col justify-between">
            <Input
              type={"submit"}
              className={
                "cursor-pointer hover:bg-black hover:text-white active:scale-95"
              }
            />
            <button
              type="reset"
              onClick={handleReset}
              className={
                "border border-black py-1.5 pl-3 pr-5 w-60 mb-2 rounded-lg  cursor-pointer hover:bg-black hover:text-white active:scale-95"
              }
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </>
  );
};
