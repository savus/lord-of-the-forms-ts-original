import { ChangeEventHandler, useRef } from "react";
import { TPhoneInput } from "../types";

export const PhoneInput = ({
  phoneInputState,
  setPhoneInputState,
}: {
  phoneInputState: TPhoneInput;
  setPhoneInputState: (input: TPhoneInput) => void;
}) => {
  const maxLengths = [2, 2, 2, 1];
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const createOnChangeHandler =
    (index: 0 | 1 | 2 | 3): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const value = e.target.value;
      const currentMaxLength = maxLengths[index];
      const nextRef =
        index < phoneInputState.length - 1 ? refs[index + 1] : refs[index];
      const prevRef = index > 0 ? refs[index - 1] : refs[index];
      const shouldGoToNextRef = value.length === currentMaxLength;
      const shouldGoToPrevRef = value.length === 0;

      if (shouldGoToNextRef) {
        nextRef.current?.focus();
      }

      if (shouldGoToPrevRef) {
        prevRef.current?.focus();
      }

      const newState = phoneInputState.map((phoneInput, phoneIndex) =>
        phoneIndex === index ? value : phoneInput
      ) as TPhoneInput;

      setPhoneInputState(newState);
    };

  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>

      <div id="phone-input-wrap">
        <input
          type="text"
          id="phone-input-1"
          placeholder="55"
          value={phoneInputState[0]}
          onChange={createOnChangeHandler(0)}
          ref={refs[0]}
          maxLength={maxLengths[0]}
        />
        -
        <input
          type="text"
          id="phone-input-2"
          placeholder="55"
          value={phoneInputState[1]}
          onChange={createOnChangeHandler(1)}
          ref={refs[1]}
          maxLength={maxLengths[1]}
        />
        -
        <input
          type="text"
          id="phone-input-3"
          placeholder="55"
          value={phoneInputState[2]}
          onChange={createOnChangeHandler(2)}
          ref={refs[2]}
          maxLength={maxLengths[2]}
        />
        -
        <input
          type="text"
          id="phone-input-4"
          placeholder="7"
          value={phoneInputState[3]}
          onChange={createOnChangeHandler(3)}
          ref={refs[3]}
          maxLength={maxLengths[3]}
        />
      </div>
    </div>
  );
};
