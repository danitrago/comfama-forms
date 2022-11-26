import React from "react";
import "./form-input.scss";

type FormInputProps = React.ComponentProps<"input">;

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props: FormInputProps, ref) => {
    const { ...rest } = props;
    const compClass = "cfm-form-input";
    let attributes = {
      ...rest,
      className: `${props.className || ""} ${compClass}`.trim()
    };
    return <input ref={ref} {...attributes} />;
  }
);

export default FormInput;
