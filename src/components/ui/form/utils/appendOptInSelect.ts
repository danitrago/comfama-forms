export const appendOptInSelect = (
  fields: any,
  fieldName: string,
  options: any
) => {
  let pos = fields.findIndex((field: any) => field.name === fieldName);
  fields[pos] = {
    ...fields[pos],
    options: fields[pos].options.concat(options)
  };
};
