import React from "react";
import "./form-group.scss";

type FormGroupProps = {
  children?: React.ReactNode;
};

const FormGroup = (props: FormGroupProps) => {
  return <div className="cfm-form-group">{props.children}</div>;
};

export default FormGroup;
