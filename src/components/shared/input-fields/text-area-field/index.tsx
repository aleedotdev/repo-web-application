import { Icon } from "@iconify/react";
import Image from "next/image";
import { FC } from "react";

import { Typography } from "../../typography";

const TextAreaField: FC<any> = ({
  name,
  label,
  value,
  error,
  onBlur,
  onFocus,
  styling,
  onChange,
  required,
  disabled,
  inputUnit,
  placeholder,
  labelStyles,
  textColor = "text-black",
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div>
          <Typography size="lg" className={`${labelStyles} font-semibold`}>
            {label}
            {required && <span className="text-red">*</span>}
          </Typography>
        </div>
      )}
      <div className="relative flex items-center">
        <textarea
          onFocus={onFocus}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={handleBlur}
          style={{ resize: "none" }}
          className={`px-5 py-4  min-h-[11rem] ${textColor} border ${error ? "border-red" : "border-gray"} text-lg placeholder:text-md placeholder:text-dark-gray disabled:text-gray disabled:border-gray placeholder:font-medium disabled:cursor-not-allowed font-medium disabled:bg-dull-white focus:outline-none rounded-[12px] w-full ${error ? "hover:border-red" : ""} ${styling}`}
        />
      </div>
      {error && (
        <div>
          <Typography size="sm" as="p" className="text-red font-normal">
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TextAreaField;
