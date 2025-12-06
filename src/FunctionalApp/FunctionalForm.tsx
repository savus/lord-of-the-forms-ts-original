import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { TPhoneInput, TUserInformation } from "../types";
import { TextInput } from "../CustomComponents/TextInput";
import { PhoneInput } from "../CustomComponents/PhoneInput";
import { isInputValid } from "../utils/validations";
import { formatPhoneNumber } from "../utils/transformations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  setUserInfo,
}: {
  setUserInfo: (info: TUserInformation) => void;
}) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInputState, setPhoneInputState] = useState<TPhoneInput>([
    "",
    "",
    "",
    "",
  ]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formatedPhoneInput = formatPhoneNumber(
    phoneInputState.join(""),
    [2, 2, 2, 1]
  );

  const isFirstNameValid = isInputValid(firstNameInput, "name");
  const isLastNameValid = isInputValid(lastNameInput, "name");
  const isEmailValid = isInputValid(emailInput, "email");
  const isCityValid = isInputValid(cityInput, "city");
  const isPhoneValid = isInputValid(formatedPhoneInput, "phone");

  const showFirstNameError = hasSubmitted && !isFirstNameValid;
  const showLastNameError = hasSubmitted && !isLastNameValid;
  const showEmailError = hasSubmitted && !isEmailValid;
  const showCityError = hasSubmitted && !isCityValid;
  const showPhoneError = hasSubmitted && !isPhoneValid;

  const doBadInputsExist =
    !isFirstNameValid ||
    !isLastNameValid ||
    !isEmailValid ||
    !isCityValid ||
    !isPhoneValid;

  const resetValues = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setCityInput("");
    setPhoneInputState(["", "", "", ""]);
  };

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!doBadInputsExist) {
          setUserInfo({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            city: cityInput,
            phone: formatedPhoneInput,
          });
          // resetValues();
        } else {
          alert("Bad Inputs Exist");
        }
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <TextInput
        label="First Name"
        inputProps={{
          placeholder: "Bilbo",
          type: "text",
          value: firstNameInput,
          onChange: ({ target: { value } }) => setFirstNameInput(value),
        }}
      />
      <ErrorMessage message={firstNameErrorMessage} show={showFirstNameError} />

      {/* last name input */}
      <TextInput
        label="Last Name"
        inputProps={{
          placeholder: "Baggins",
          type: "text",
          value: lastNameInput,
          onChange: ({ target: { value } }) => setLastNameInput(value),
        }}
      />
      <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />

      {/* Email Input */}
      <TextInput
        label="Email"
        inputProps={{
          placeholder: "bilbo-baggins@adventurehobbits.net",
          type: "email",
          value: emailInput,
          onChange: ({ target: { value } }) => setEmailInput(value),
        }}
      />
      <ErrorMessage message={emailErrorMessage} show={showEmailError} />

      {/* City Input */}
      <TextInput
        label="City"
        inputProps={{
          placeholder: "Hobbiton",
          type: "text",
          value: cityInput,
          onChange: ({ target: { value } }) => setCityInput(value),
        }}
      />
      <ErrorMessage message={cityErrorMessage} show={showCityError} />

      <PhoneInput
        phoneInputState={phoneInputState}
        setPhoneInputState={(input: TPhoneInput) => {
          setPhoneInputState(input);
        }}
      />

      <ErrorMessage message={phoneNumberErrorMessage} show={showPhoneError} />

      <input type="submit" value="Submit" />
    </form>
  );
};
