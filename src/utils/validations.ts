import { TRegexPatterns } from "../types";

export const regexPatterns: TRegexPatterns = {
  name: /^[a-zA-Z]{2,}(\s)*$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};

export const isInputValid = (input: string, pattern: string) =>
  regexPatterns[pattern].test(input);

export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}
