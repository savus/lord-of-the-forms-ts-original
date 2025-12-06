import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { TPhoneInput, TUserInformation } from "../types";
import { TextInput } from "../CustomComponents/TextInput";
import { PhoneInput } from "../CustomComponents/PhoneInput";

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

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        setUserInfo(null);
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
      <ErrorMessage message={firstNameErrorMessage} show={true} />

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
      <ErrorMessage message={lastNameErrorMessage} show={true} />

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
      <ErrorMessage message={emailErrorMessage} show={true} />

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
      <ErrorMessage message={cityErrorMessage} show={true} />

      <PhoneInput
        phoneInputState={phoneInputState}
        setPhoneInputState={(input: TPhoneInput) => {
          setPhoneInputState(input);
        }}
      />

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
