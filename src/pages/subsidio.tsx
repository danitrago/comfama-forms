import React from "react";
import FormularioSubsidio from "../components/FormularioSubsidio";
import MainContent from "../components/layout/main-content/MainContent";
import { FieldType } from "../components/ui/form";

// example payload from Contentful
const fields: FieldType[] = [
  {
    type: "text",
    name: "name",
    label: "Nombre",
    placeholder: "Escribe tu nombre",
    help: "Lorem tempor exercitation."
  },
  {
    type: "select",
    name: "genre",
    label: "Género",
    required: true,
    options: [
      {
        label: "Seleccionar...",
        value: ""
      },
      {
        label: "Hombre",
        value: "hombre"
      },
      {
        label: "Mujer",
        value: "mujer"
      }
    ]
  },
  {
    type: "text",
    name: "otherGenre",
    label: "Otro género",
    required: true,
    placeholder: "Escribe tu género",
    help: "Describe tu género."
  },
  {
    type: "text",
    name: "lastName",
    label: "Apellido",
    required: true,
    placeholder: "Escribe tu nombre",
    help: "Sunt et cupidatat proident culpa."
  },
  {
    type: "select",
    name: "docType",
    label: "Tipo de documento",
    required: true,
    options: [
      {
        label: "Seleccionar...",
        value: ""
      }
    ]
  },
  {
    type: "text",
    name: "otherDocType",
    label: "Otro tipo de documento",
    required: true,
    placeholder: "Escribe tu tipo de documento",
    help: "Describe tu tipo de documento."
  }
];

const Subsidio = () => {
  return (
    <MainContent>
      {/* cada nodo es un organismo */}
      <h1>Página Subsidio</h1>
      <p>
        Magna consequat pariatur ex nisi aute. Magna elit nisi velit
        exercitation id esse cupidatat dolor tempor eu. Nostrud quis
        reprehenderit occaecat laboris. Minim occaecat aute nostrud cupidatat
        cillum dolor et quis. Exercitation id esse exercitation laboris qui
        Lorem tempor Lorem exercitation qui. Non adipisicing elit Lorem id.
        Occaecat in sunt esse minim ullamco.
      </p>
      <div style={{ marginBottom: "4rem" }}></div>
      <FormularioSubsidio fields={fields} />
    </MainContent>
  );
};

export default Subsidio;
