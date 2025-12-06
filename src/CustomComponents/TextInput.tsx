import { TInputProps } from "../types";

export const TextInput = ({
  label,
  inputProps,
}: {
  label: string;
  inputProps: TInputProps;
}) => {
  return (
    <div className="input-wrap">
      <label>{label}:</label>
      <input {...inputProps} list={label === "City" ? "cities" : ""} />
    </div>
  );
};
