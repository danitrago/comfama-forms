import FormGroup from "./form-group/FormGroup";
import FormInput from "./form-input/FormInput";
import FormLabel from "./form-label/FormLabel";
import FormSelect from "./form-select/FormSelect";
import FormText from "./form-text/FormText";

const Form = {
  Input: FormInput,
  Select: FormSelect,
  Label: FormLabel,
  Help: FormText,
  Group: FormGroup
};

export default Form;
export * from "./form.types";
export * from "./utils";
