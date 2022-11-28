type InputType = {
  type: "text" | "date" | "number" | "email";
  label?: string;
  name?: string;
  required?: boolean;
  help?: string;
  placeholder?: string;
  className?:string;
};

type SelectType = {
  type: "select";
  label?: string;
  name?: string;
  required?: boolean;
  help?: string;
  className?:string;
  options?: {
    label: string;
    value: any;
  }[];
};

export type FieldType = InputType | SelectType;
