import { ComponentProps } from "react";

export type TRegexPatterns = {
  [key: string]: RegExp;
};

export type TUserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

export type TInputProps = ComponentProps<"input">;

export type TPhoneInput = [string, string, string, string];
