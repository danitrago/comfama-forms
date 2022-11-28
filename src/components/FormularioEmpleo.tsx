import { FormEvent, useEffect, useRef, useState } from "react";
import { contentfulFormAdapter } from "../adapters/contentfulForm.adapter";
import FormGenerator from "../components/ui/form/form-generator/FormGenerator";
import GridLayout from "../components/ui/grid-layout/GridLayout";
import "../components/ui/styles/general.scss";
import { appendOptInSelect } from "./ui/form/utils/appendOptInSelect";

const FormularioEmpleo = (props: any) => {
  const [fields, setFields] = useState(props.fields);
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const initialFields = useRef<any>(props.fields);

  const changeDataConditions = (fields: any) => {
    let process = [...fields];
    let data: any = { ...formData };
    // debugger;
    if (formData.genre !== "otro") {
      process = process.filter((field: any) => field.name !== "otherGenre");
      delete data.otherGenre;
    }
    if (formData.docType !== "otro") {
      process = process.filter((field: any) => field.name !== "otherDocType");
      delete data.otherDocType;
    }
    setFormData(data);
    return process;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Posting...");
    console.log(formData);
    alert("Posting...");
  };

  // obtain options from service
  useEffect(() => {
    return;
    setLoading(true);
    setTimeout(() => {
      const docTypes = [
        {
          label: "Cédula de ciudadanía",
          value: "1"
        },
        {
          label: "Tarjeta de identidad",
          value: "2"
        },
        {
          label: "Otro",
          value: "otro"
        }
      ];
      const genres = [
        {
          label: "Vaca",
          value: "5"
        },
        {
          label: "Perro",
          value: "6"
        },
        {
          label: "Otro",
          value: "otro"
        }
      ];
      let process = [...fields];
      appendOptInSelect(process, "docType", docTypes);
      appendOptInSelect(process, "genre", genres);
      initialFields.current = process;
      let filteredFields = changeDataConditions(initialFields.current);
      setFields(filteredFields);
      setLoading(false);
    }, 2000);
  }, []);

  // filter fields conditions
  let fieldsToTrack = [formData.genre, formData.docType];
  useEffect(() => {
    return;
    let filteredFields = changeDataConditions(initialFields.current);
    setFields(filteredFields);
  }, fieldsToTrack);

  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      {
        props.fields.data.titulosFormularios.map((seccion:any) => {
          return <>
          <h1>{seccion.tituloGeneral}</h1>
          <FormGenerator fields={contentfulFormAdapter(seccion.fields)} setData={()=>{}} />
          </>
        } )
      }
  
      <div style={{ marginBottom: "3rem" }}></div>
      <input type="submit" />
      <div style={{ marginBottom: "3rem" }}></div>
      <hr />
      {JSON.stringify(formData)}
    </form>
  );
};

export default FormularioEmpleo;
