import React from "react";
import "./form-text.scss";

type FormTextProps = React.ComponentProps<"div"> & {
  children?: React.ReactNode;
};

const FormText = (props: FormTextProps) => {
  const { children, ...rest } = props;
  // React.Children.map(children, (child: any) => {
  //   if (child.type !== "option")
  //     throw "ComfamaDev: Please use only the 'option' tag as children in a FormText component";
  // });
  const compClass = "cfm-form-text";
  let attributes = {
    ...rest,
    className: `${props.className || ""} ${compClass}`.trim()
  };
  return <div {...attributes}>{children}</div>;
};

export default FormText;
