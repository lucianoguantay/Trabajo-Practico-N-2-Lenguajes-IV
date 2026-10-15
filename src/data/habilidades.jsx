import imgFrontend from "../imagenes/imagenFrontend.png";
import imgBackend from "../imagenes/ImagenBackend.jpg";
import imgBaseDatos from "../imagenes/imagenBasededatos.jpg";
import imgAnalista from "../imagenes/imagenAnalistadesistemas.jpg";
import imgIA from "../imagenes/imagenInteligenciaArtificial.jpg";

export const habilidadesInfo = [
  {
    id: 1,
    titulo: "Desarrollo Frontend UI/UX",
    descripcion:
      "Diseño y construcción de interfaces de usuario atractivas, funcionales y responsivas, enfocadas en ofrecer una experiencia de navegación fluida, moderna y centrada en el usuario",
    habilidades: [
      "HTML",
      "CSS",
      "JavaScript",
      "Boostrap",
      "Tailwind CSS",
      "React",
    ],
    imagen: imgFrontend,
  },
  {
    id: 2,
    titulo: "Desarrollo Backend",
    descripcion:
      "Construcción de la lógica de negocio robusta, arquitectura de servidores y servicios para garantizar un rendimiento óptimo",
    habilidades: ["Java", "Python"],
    imagen: imgBackend,
  },
  {
    id: 3,
    titulo: "Gestión de Bases de Datos",
    descripcion:
      "Diseño, modelado y administración de bases de datos relacionales en SQL Server mediante consultas avanzadas, procedimientos almacenados, triggers y transacciones seguras.",
    habilidades: ["SQL Server", "Diseño Relacional", "Azure SQL"],
    imagen: imgBaseDatos,
  },
  {
    id: 4,
    titulo: "Analisis y Relevamiento de Datos",
    descripcion:
      "Técnicas de análisis de requerimientos, levantamiento de información de sistemas y estructuración de especificaciones funcionales para compendre el flujo de informacion de la organizacion y las mejoras necesarias y adecuadas.",
    habilidades: [
      "Comunicacion Efectiva",
      "Liderazgo",
      "Entrevistas",
      "Observacion",
    ],
    imagen: imgAnalista,
  },
  {
    id: 6,
    titulo: "Inteligencia Artificial y Modelos Multimodales",
    descripcion:
      "Integración de la IA en el desarrollo de software y de APIs de IA avanzada (como Google Gemini) en aplicaciones web para la automatización de procesos, procesamiento inteligente de documentos y extracción de métricas.",
    habilidades: ["Gemini IA", "Chat GPT", "Claude", "Antigravity"],
    imagen: imgIA,
  },
];
