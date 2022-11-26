import React from "react";
import "./form-select.scss";

type FormSelectProps = React.ComponentProps<"select"> & {
  children?: React.ReactNode;
};

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  (props: FormSelectProps, ref) => {
    const { children, ...rest } = props;
    // React.Children.map(children, (child: any) => {
    //   if (child.type !== "option")
    //     throw "ComfamaDev: Please use only the 'option' tag as children in a FormSelect component";
    // });
    const compClass = "cfm-form-select";
    let attributes = {
      ...rest,
      className: `${props.className || ""} ${compClass}`.trim()
    };
    return (
      <select ref={ref} {...attributes}>
        {children}
      </select>
    );
  }
);

export default FormSelect;
