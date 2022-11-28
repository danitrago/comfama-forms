import React from "react";
import { contentfulFormAdapter } from "../adapters/contentfulForm.adapter";
import FormularioEmpleo from "../components/FormularioEmpleo";
import MainContent from "../components/layout/main-content/MainContent";
import Form from "../components/ui/form";

// example payload from Contentful
const fieldsContentful: any = {data: {
  titulosFormularios: [
    {
      tituloGeneral: "datos de la empresa",
      fields: [
        {
          tipoCampo: "text",
          listaSelect: null,
          mensajeError: null,
          inputPrincipal: "Fecha de registro",
          className:"registerDate jaja",
          nombreId: "registerDate",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "hiddenSeccion"
        },
        {
          tipoCampo: "select",
          listaSelect: [
            "Cédula de ciudadanía",
            "Cédula de extranjería",
            "Pasaporte",
            "Tarjeta de Identidad",
            "Permiso especial de permanencia",
            "Permiso de Protección Temporal"
          ],
          mensajeError: "*Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu tipo de documento?",
          nombreId: "documentType",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "number",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu número de documento?",
          nombreId: "docNumber",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "text",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu nombre completo?",
          nombreId: "fullName",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "radio",
          listaSelect: ["Hombre", "Mujer", "No binario", "Otro"],
          mensajeError: "* Pregunta Obligatoria",
          inputPrincipal: "¿Cuál es tu género?",
          nombreId: "gender",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "mobile",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu número de teléfono celular?",
          nombreId: "mobile",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "number",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal:
            "¿Tienes otro número fijo o celular donde te podamos contactar?",
          nombreId: "phone",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "email",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu correo electrónico personal?",
          nombreId: "email",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "date",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu fecha de nacimiento?",
          nombreId: "birthDate",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "checkbox",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "Autorización tratamiento de datos personales",
          nombreId: "dataProcessingAuthorization",
          tituloBotonTerminos: "Autorización de tratamiento de datos.",
          textoTerminos: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "Comfama cuida tu información. Haz clic aquí para autorizar el ",
                      nodeType: "text"
                    },
                    {
                      data: {
                        uri: "https://serviciosenlinea.comfama.com/webinicio/tratamientodatos.htm"
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "tratamiento de datos",
                          nodeType: "text"
                        }
                      ],
                      nodeType: "hyperlink"
                    },
                    {
                      data: {},
                      marks: [],
                      value: " personales.\n\n",
                      nodeType: "text"
                    }
                  ],
                  nodeType: "paragraph"
                }
              ],
              nodeType: "document"
            }
          },
          obligatorio: true,
          seccion: "datosPersonales"
        }
      ]
    },
    {
      tituloGeneral: "datos del servicio",
      fields: [
        {
          tipoCampo: "text",
          listaSelect: null,
          mensajeError: null,
          inputPrincipal: "Fecha de registro",
          nombreId: "registerDate",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "hiddenSeccion"
        },
        {
          tipoCampo: "select",
          listaSelect: [
            "Cédula de ciudadanía",
            "Cédula de extranjería",
            "Pasaporte",
            "Tarjeta de Identidad",
            "Permiso especial de permanencia",
            "Permiso de Protección Temporal"
          ],
          mensajeError: "*Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu tipo de documento?",
          nombreId: "documentType",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "number",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu número de documento?",
          nombreId: "docNumber",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "text",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu nombre completo?",
          nombreId: "fullName",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "radio",
          listaSelect: ["Hombre", "Mujer", "No binario", "Otro"],
          mensajeError: "* Pregunta Obligatoria",
          inputPrincipal: "¿Cuál es tu género?",
          nombreId: "gender",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "mobile",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu número de teléfono celular?",
          nombreId: "mobile",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "number",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal:
            "¿Tienes otro número fijo o celular donde te podamos contactar?",
          nombreId: "phone",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "email",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu correo electrónico personal?",
          nombreId: "email",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "date",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "¿Cuál es tu fecha de nacimiento?",
          nombreId: "birthDate",
          tituloBotonTerminos: null,
          textoTerminos: null,
          obligatorio: true,
          seccion: "datosPersonales"
        },
        {
          tipoCampo: "checkbox",
          listaSelect: null,
          mensajeError: "* Pregunta obligatoria",
          inputPrincipal: "Autorización tratamiento de datos personales",
          nombreId: "dataProcessingAuthorization",
          tituloBotonTerminos: "Autorización de tratamiento de datos.",
          textoTerminos: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "Comfama cuida tu información. Haz clic aquí para autorizar el ",
                      nodeType: "text"
                    },
                    {
                      data: {
                        uri: "https://serviciosenlinea.comfama.com/webinicio/tratamientodatos.htm"
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "tratamiento de datos",
                          nodeType: "text"
                        }
                      ],
                      nodeType: "hyperlink"
                    },
                    {
                      data: {},
                      marks: [],
                      value: " personales.\n\n",
                      nodeType: "text"
                    }
                  ],
                  nodeType: "paragraph"
                }
              ],
              nodeType: "document"
            }
          },
          obligatorio: true,
          seccion: "datosPersonales"
        }
      ]
    }
  ]
}};

const Empleo = () => {
  return (
    <MainContent>
      {/* cada nodo es un organismo */}
      <h1>Página Empleo</h1>
      <p>
        Magna consequat pariatur ex nisi aute. Magna elit nisi velit
        exercitation id esse cupidatat dolor tempor eu. Nostrud quis
        reprehenderit occaecat laboris. Minim occaecat aute nostrud cupidatat
        cillum dolor et quis. Exercitation id esse exercitation laboris qui
        Lorem tempor Lorem exercitation qui. Non adipisicing elit Lorem id.
        Occaecat in sunt esse minim ullamco.
      </p>
      <div style={{ marginBottom: "4rem" }}></div>
      <FormularioEmpleo fields={fieldsContentful} />
      <div>
        <Form.Label>Mi label</Form.Label>
        <Form.Input placeholder="Hola" type="text" />
      </div>
    </MainContent>
  );
};

export default Empleo;
