import { FieldType } from "../components/ui/form";

export const contentfulFormAdapter = (data: any) => {
  let process: FieldType[] = [];
  data.forEach((field: any) => {
    let dummie: FieldType = {
      type: field.tipoCampo,
      name: field.nombreId,
      label: field.inputPrincipal,
      required: field.obligatorio,
      placeholder: field.inputPrincipal,
      options: field.listaSelect?.map((option: any, i: number) => ({
        label: option,
        value: i + field.nombreId
      })),
      help: "",
      className: field.className
    };
    process.push(dummie);
  });
  return process;
};
