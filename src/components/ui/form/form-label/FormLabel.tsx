import React from "react";
import "./form-label.scss";

type FormLabelProps = React.ComponentProps<"label"> & {
  children?: React.ReactNode;
};

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (props: FormLabelProps, ref) => {
    const { children, ...rest } = props;
    // React.Children.map(children, (child: any) => {
    //   if (child.type !== "option")
    //     throw "ComfamaDev: Please use only the 'option' tag as children in a FormLabel component";
    // });
    const compClass = "cfm-form-label";
    let attributes = {
      ...rest,
      className: `${props.className || ""} ${compClass}`.trim()
    };
    return (
      <label ref={ref} {...attributes}>
        {children}
      </label>
    );
  }
);

export default FormLabel;
