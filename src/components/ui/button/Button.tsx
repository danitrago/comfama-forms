import React from "react";
import "./button.scss";

type ButtonProps = React.ComponentProps<"button"> & {
  children?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  const compClass = "cfm-button";
  let attributes = {
    ...rest,
    className: `${props.className || ""} ${compClass}`.trim()
  };
  return <button {...attributes}>{children}</button>;
};

export default Button;
