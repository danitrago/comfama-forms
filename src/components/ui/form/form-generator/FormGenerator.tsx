import React from "react";
import Form from "..";
import { FieldType } from "../form.types";
import { handleInputChange } from "../utils";

type FormGeneratorProps = {
  className?: string;
  fields: FieldType[];
  setData: any;
};

const Input = (props: any) => {
  const { field } = props;
  return (
    <div key={field.name}>
      {field.label && <Form.Label>{field.label}</Form.Label>}
      <Form.Input
        id={field.name}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        onChange={(e) => handleInputChange(e, props.setData)}
        required={field.required}
      />
      {field.help && <Form.Help>{field.help}</Form.Help>}
    </div>
  );
};

const FormGenerator = (props: FormGeneratorProps) => {
  return (
    <>
      {props.fields.map((field) => {
        switch (field.type) {
          case "text":
            return <Input field={field} />;
          case "date":
            return <Input field={field} />;
          case "email":
            return <Input field={field} />;
          case "number":
            return <Input field={field} />;
          case "select":
            return (
              <div key={field.name}>
                {field.label && <Form.Label>{field.label}</Form.Label>}
                <Form.Select
                  id={field.name}
                  name={field.name}
                  onChange={(e) => handleInputChange(e, props.setData)}
                  required={field.required}
                >
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
                {field.help && <Form.Help>{field.help}</Form.Help>}
              </div>
            );
          default:
            return "";
        }
      })}
    </>
  );
};

export default FormGenerator;
